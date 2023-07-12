/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, animateScroll, scroller } from "react-scroll";
import styles from "./home.module.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Soy Desarrollador Full Stack.";
  const [isBlinking, setIsBlinking] = useState(true);

  const handleLinkClick = (target) => {
    scroller.scrollTo(target, {
      duration: 1800,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    if (typedText.length < targetText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(targetText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      setIsBlinking(!isBlinking);
    }
    return () => clearTimeout(timeoutId);
  }, [typedText]);

  return (
    <div className={styles["containerHome"]}>
      <div className={styles["infoFirstHome"]}>
        <h2>Bienvenido!</h2>
        <h1>
          {typedText}
          <span className={isBlinking ? styles["blinkingBar"] : ""}></span>
        </h1>
        <h4>De Bogotá, Colombia</h4>
        <div className={styles["contactCV"]}>
          <Link to="about" onClick={() => handleLinkClick("contact")}>
            <button>Contáctame</button>
          </Link>
        </div>
      </div>
      <div className={styles["iconHome"]}>
        <Link to="about" onClick={() => handleLinkClick("about")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;