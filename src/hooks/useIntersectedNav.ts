import { useRef, useEffect } from "react";

export const useIntersectedNav = (onIntersect: () => void) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    console.debug("mounting");

    return () => {
      if (observer.current) {
        // observer.current.disconnect();
      }
    };
  }, []);

  const refCallback = (element: Element | null) => {
    if (!element || observer.current) {
      return;
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 1,
      }
    );

    observer.current.observe(element);
  };

  return refCallback;
};
