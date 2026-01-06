import { useEffect, useState } from 'react';
import './ScrollIndicator.css';

interface ScrollIndicatorProps {
  sectionIds: string[]; // IDs of sections to track
}

export default function ScrollIndicator({ sectionIds }: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      // Offset by navbar height (approx 90px) to make the transition feel more accurate
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
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds, activeIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="scroll-indicator" aria-label="Section scroll indicator">
      {sectionIds.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className={`scroll-dot ${i === activeIndex ? 'active' : ''}`}
          aria-current={i === activeIndex ? 'true' : undefined}
          aria-label={`Scroll to section ${i + 1}`}
        >
          {/* Square inner for the brutalist look */}
          <span className="dot-inner"></span>
        </a>
      ))}
    </nav>
  );
}