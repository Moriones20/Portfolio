import { useEffect, useState } from "react";
import styles from "./mousemove.module.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCircles = () => {
      setlargecircle({ x: mouseX, y: mouseY });
      requestAnimationFrame(updateCircles);
    };

    const mousemove = (e) => {
      setMousePosition(e.clientX, e.clientY);
    };

    const setMousePosition = (x, y) => {
      mouseX = x;
      mouseY = y;
    };

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", mousemove);
    requestAnimationFrame(updateCircles);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        style={{
          transform: `translate(${largecircle.x}px, ${largecircle.y}px)`,
        }}
        className={styles["large_circle"]}
      ></motion.div>
    </div>
  );
};

export default Cursor;
