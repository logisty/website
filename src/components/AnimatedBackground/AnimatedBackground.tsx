import { useRive } from '@rive-app/react-canvas';

export default function AnimatedBackground() {
  const { RiveComponent } = useRive({
    src: '/animations/intro-background.riv',
    autoplay: true,
    animations: ['Timeline 2'], 
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
