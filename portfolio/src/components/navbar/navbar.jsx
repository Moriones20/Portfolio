import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="bg-custom-blue text-white dark:shadow-xl fixed w-screen z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Felipe Moriones</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-base">
          <Link
            activeClass="text-blue-500"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            activeClass="text-blue-500"
            to="aboutResp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre mí
          </Link>
          <Link
            activeClass="text-blue-500"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portafolio
          </Link>
          <Link
            activeClass="text-blue-500"
            to="contactResp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacto
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="focus:outline-none text-white"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
                  fill="#ffffff"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                  fill="#ffffff"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-2 bg-custom-blue text-base shadow-lg">
            <Link
              activeClass="text-blue-500"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggleMenu}
            >
              Inicio
            </Link>
            <Link
              activeClass="text-blue-500"
              to="aboutResp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggleMenu}
            >
              Sobre mí
            </Link>
            <Link
              activeClass="text-blue-500"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggleMenu}
            >
              Portafolio
            </Link>
            <Link
              activeClass="text-blue-500"
              to="contactResp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
