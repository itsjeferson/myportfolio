import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently in view so the nav can
 * highlight the active link while the user scrolls.
 */
export const useScrollSpy = (sectionIds, options = { rootMargin: '-45% 0px -50% 0px' }) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeId;
};
