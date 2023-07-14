import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles["containerAbout"]}>
      <div className={styles["titleAbout"]} id="aboutResp">
        <h1>Sobre mí</h1>
      </div>
      <div className={styles["contentAbout"]}>
        <div className={styles["infoAboutMe"]}>
          <h2>
            Soy <span>Felipe Moriones</span>, desarrollador Full Stack
          </h2>
          <p>
            Como Desarrollador Web Full Stack, me apasiona enfrentar nuevos
            desafíos y mejorar constantemente mis habilidades y conocimientos.
            Estoy comprometido en desarrollar proyectos de alta calidad y
            eficientes, adaptados a diferentes necesidades.
          </p>{" "}
          <br />
          <p>
            He adquirido experiencia en el uso de tecnologías de vanguardia como
            React, Node.js, y postgresSQL. Soy una persona proactiva,
            comprometida y capaz de trabajar en equipo para alcanzar los
            objetivos propuestos. Siempre busco soluciones innovadoras y
            efectivas para optimizar el rendimiento y la experiencia del usuario
            final.
          </p>
        </div>
        <div className={styles["infoMe"]}>
          <h3>
            <span>Nombre:</span> Juan Felipe Moriones
          </h3>
          <h3>
            <span>Email:</span> moriones06082001@gmail.com
          </h3>
          <h3>
            <span>Edad:</span> 21
          </h3>
          <h3>
            <span>De:</span> Bogotá, Colombia
          </h3>
          <a
            href="https://drive.google.com/file/d/1mO5aXXoqcIndSx039ByEv3O83EhrGzKQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Ver CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
