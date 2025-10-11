import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantáneo a la parte superior cuando cambia la ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

