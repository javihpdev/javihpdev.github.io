import { createContext, useContext, useEffect } from "react";

const AnimationContext = createContext({});
import { ReactNode } from "react";

export function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Seleccionamos todos los elementos con la clase animate-on-scroll
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    
    animateElements.forEach(element => {
      element.classList.add("opacity-0", "transition-opacity", "duration-1000");
      observer.observe(element);
    });

    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <AnimationContext.Provider value={{}}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimation = () => useContext(AnimationContext);