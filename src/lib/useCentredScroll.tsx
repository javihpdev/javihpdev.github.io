// src/lib/hooks/useCenteredScroll.tsx
import { useEffect } from 'react';

export function useCenteredScroll() {
  useEffect(() => {
    // Función personalizada para el desplazamiento centrado
    const scrollToCenter = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        // Calcular posición para centrar el elemento en la pantalla
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2) - navHeight;
        
        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
      }
    };

    // Agregar esta función a window para poder accederla desde cualquier componente
    window.scrollToCenter = scrollToCenter;

    // Interceptar los clics en enlaces con hash
    const handleLinkClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash) {
        mouseEvent.preventDefault();
        const id = link.hash.substring(1); // Quitar el # del principio
        scrollToCenter(id);
      }
    };

    // Agregar el event listener a todos los links dentro de la navegación
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      // Limpiar event listeners cuando el componente se desmonte
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      
      // Limpiar la función global
      delete window.scrollToCenter;
    };
  }, []);
}

// Necesitamos declarar el tipo para window.scrollToCenter
declare global {
  interface Window {
    scrollToCenter?: (elementId: string) => void;
  }
}