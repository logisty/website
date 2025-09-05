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

export const useContactStore = create<ContactFormState>((set, get) => ({
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
    
    if (!name || !email || !message) {
      setStatus('Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Invalid email format');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending...');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Configuration error: Missing EmailJS credentials');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(serviceId, templateId, {
        name,
        email,
        message,
      }, publicKey);
      console.log('Email sent successfully:', result.text);
      setStatus(t('contactSuccessMessage'));
      set({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Email sending failed:', error.text);
      if (error.text?.includes('535 5.7.8')) {
        setStatus('Authentication failed: Check Brevo SMTP settings');
      } else {
        setStatus(t('contactErrorMessage'));
      }
    } finally {
      setTimeout(() => setIsSubmitting(false), 10000); // Re-enable after 10s
    }
  },
  resetForm: () => set({ name: '', email: '', message: '', status: '' }),
}));