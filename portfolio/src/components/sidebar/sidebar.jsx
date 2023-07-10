import styles from "./sidebar.module.css";
import { useEffect } from "react";
import { Link, animateScroll, scroller } from "react-scroll";

const Sidebar = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, []);

  const handleLinkClick = (target) => {
    scroller.scrollTo(target, {
      duration: 1800,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <div className={styles["containerSidebar"]}>
      <div className={styles["photo"]}>
        <img src="./" alt="Felipe Moriones" />
        <h1>Felipe Moriones</h1>
      </div>
      <div className={styles["menuHome"]}>
        <div className={styles["btnMenu"]}>
          <Link to="home" onClick={() => handleLinkClick("home")}>
            <h2>Home</h2>
          </Link>
        </div>
        <div className={styles["btnMenu"]}>
          <Link to="about" onClick={() => handleLinkClick("about")}>
            <h2>About</h2>
          </Link>
        </div>
        <div className={styles["btnMenu"]}>
          <Link to="technologies" onClick={() => handleLinkClick("technologies")}>
            <h2>Technologies</h2>
          </Link>
        </div>
        <div className={styles["btnMenu"]}>
          <Link to="portfolio" onClick={() => handleLinkClick("portfolio")}>
            <h2>Portfolio</h2>
          </Link>
        </div>
        <div className={styles["btnMenu"]}>
          <Link to="contact" onClick={() => handleLinkClick("contact")}>
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
      <div className={styles["socialMenu"]}>
        <a href="https://www.facebook.com/">F</a>
        <a href="https://www.facebook.com/">G</a>
        <a href="https://www.facebook.com/">L</a>
      </div>
    </div>
  );
};

export default Sidebar;
