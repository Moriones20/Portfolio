import React, { useEffect } from "react";
import { Link, animateScroll } from "react-scroll";

const Sidebar = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0, // Establece la duración en 0 para deshabilitar el desplazamiento inicial
    });
  }, []);

  return (
    <div>
      <h1>Sidebar</h1>
      <div>
        <Link to="Home" smooth={true} duration={500}>
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
