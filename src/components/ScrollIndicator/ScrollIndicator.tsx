import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  sectionIds: string[]; // IDs of sections to track
}

export default function ScrollIndicator({ sectionIds }: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentIndex = sectionIds.findIndex((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + el.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (currentIndex !== -1 && currentIndex !== activeIndex) {
        setActiveIndex(currentIndex);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialize

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds, activeIndex]);

  return (
    <nav className="scroll-indicator" aria-label="Section scroll indicator">
      {sectionIds.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className={`scroll-dot ${i === activeIndex ? 'active' : ''}`}
          aria-current={i === activeIndex ? 'true' : undefined}
          aria-label={`Scroll to section ${i + 1}`}
        />
      ))}
    </nav>
  );
}
