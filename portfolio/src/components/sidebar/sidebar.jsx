import { useEffect } from 'react';
import { Link, animateScroll } from 'react-scroll';

const sidebar = () => {
  
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0, // Establece la duración en 0 para deshabilitar el desplazamiento inicial
    });
  }, []);

  return (
    <div>
      <h1>Sidebar</h1>
      <div>
      <Link to="seccion1" smooth={true} duration={500}>Sección 1</Link>
      </div>
    </div>
  )
};

export default sidebar;