import { create } from 'zustand';
import emailjs from '@emailjs/browser';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  status: string;
  isSubmitting: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  setStatus: (status: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  sendEmail: (t: (key: string) => string) => Promise<void>;
  resetForm: () => void;
}

export const useContactStore = create<ContactFormState>((set, get) => {
  // Initialize EmailJS
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.error('EmailJS public key is missing');
    set({ status: 'Configuration error: Missing EmailJS public key' });
  }

  return {
    name: '',
    email: '',
    message: '',
    status: '',
    isSubmitting: false,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setMessage: (message) => set({ message }),
    setStatus: (status) => set({ status }),
    setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
    sendEmail: async (t) => {
      const { name, email, message, setStatus, setIsSubmitting } = get();

      console.log('Form data:', { name, email, message });
      console.log('Env vars:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });

      if (!name || !email || !message) {
        setStatus(t('contactErrorMessage') + ': Please fill all fields');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setStatus(t('contactErrorMessage') + ': Invalid email format');
        return;
      }

      setIsSubmitting(true);
      setStatus(t('contactSendingMessage'));

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

      if (!serviceId || !templateId || !publicKey) {
        setStatus(t('contactErrorMessage') + ': Missing EmailJS credentials');
        setIsSubmitting(false);
        return;
      }

      try {
        await emailjs.send(serviceId, templateId, {
          name,
          email,
          message,
        });
        setStatus(t('contactSuccessMessage'));
        set({ name: '', email: '', message: '' });
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.message.includes('535 5.7.8')) {
            setStatus(t('contactErrorMessage') + ': Authentication failed');
          } else if (error.message.includes('Content Security Policy')) {
            setStatus(t('contactErrorMessage') + ': Blocked by CSP');
          } else {
            setStatus(t('contactErrorMessage') + ': ' + error.message);
          }
        } else {
          setStatus(t('contactErrorMessage'));
        }
      } finally {
        setTimeout(() => setIsSubmitting(false), 10000);
      }
    },
    resetForm: () => set({ name: '', email: '', message: '', status: '' }),
  };
});