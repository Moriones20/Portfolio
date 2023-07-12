import { useState } from "react";
import styles from "./contact.module.css";
import axios from "axios";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://formspree.io/f/xknlnpvr",
        formData,
        { headers: { Accept: "application/json" } }
      );

      if (response.status === 200) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "",})
        console.log("El formulario se ha enviado correctamente");
      }
    } catch (error) {
      setFormStatus("error");
      console.error("No se pudo enviar el formulario", error);
    }
  };

  return (
    <div className={styles["containerContact"]}>
      <h1 className={styles["titleContact"]}>Ponte en contacto</h1>
      <div className={styles["formLinks"]}>
        <div className={styles["linksContact"]}>
          <div className={styles["contactDetails"]}>
            <h1>Detalles de contacto</h1>
            <div className={styles["phone1"]}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO2UrQrCYBSGH7TbBGHBoFehUS/AYBYvQZNeik2wKOwSFOwGiwNBtApWFQ06J4MzGPJN2HaW9IWT9vE+nJ+98FdMNYED4AEusAIqKGov5uGaagKOBoCjCVgaAGdNwMgAcIG8FqBrACxQVAG4hcy3QAll2WLuX1SRDFQHXrJci4w0ky7srABl4CqQflaQlpyoX+0v73JpIEPp4gn0Pr75BzAP7cuRWKnGhQyki2AnlphvDP+MJwGZaFyXUHSYQjGoBwllARMZSZR5MM5Uqsmo7hEAvzu1WOkAY2ANnIAd0NAC8Bt6A9vPYU+qAWblAAAAAElFTkSuQmCC"
                alt="phone"
              />
              <h2>+57 302 311 8968</h2>
            </div>
            <div className={styles["phone2"]}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVR4nO2VQQoCMQxF30o3s7JHEmHUE+kJHc/gqnoDN7oxUoggpe1QJ+Iw+OEvfkjySwIpTA0tcAZE6TW2BS5v8RxD7bpk4BNFPjLtY8jP4pUUa6nkuA0WiTpnaeC+bSCT2IEraJMduIIe/4jkvwP59YhkiEHuXJ+sznUbmXiNLSuah/xe3LVgpnqu+oYRjtpwBzTAXnVnZbACHokRFP/bWmz0xVfg8GnzJ2cwFjkZgJNaAAAAAElFTkSuQmCC"
                alt="phone"
              />
              <h2>+57 301 595 7643</h2>
            </div>
            <div className={styles["emailContact"]}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwklEQVR4nO3UPW7CQBCG4Ueki0SK1HAKLoGVK6TOFbgCZdrcIgXHcMMV7Ig+RTqiRUiDROHEazDChUf6it2Z+d790zLGkOIFX0hXqkbRBKh7ME+hqglwSm6xu8B0F72n8Z+AZ0zxjn2G8T5qp9HbCthgFnMLlP+Yl1EjejY5gKN+sMIDJnjDd4d8K6BphXN8huYZO8wCJPziA09ntY9Yt9xRNiCdPb3XUJVR3xmQOmoEGN4R1bf+7IqeIBWWTYAx7hMHY+0ch8WLh3kAAAAASUVORK5CYII="
                alt="email"
              />
              <h2>moriones06082001@gmail.com</h2>
            </div>
          </div>
          <div className={styles["socialContact"]}>
            <h1>Sigueme</h1>
            <div className={styles["sociaIcons"]}>
              <a
                href="https://www.linkedin.com/in/felipe-moriones/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles["svgLinkedin"]}
                >
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/Moriones20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles["svgGit"]}
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/felipemsd._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles["svgInsta"]}
                >
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["containerForm"]}>
          <form onSubmit={handleSubmit}>
            <h1>Envíame una nota</h1>
            <div className={styles["nameEmail"]}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles["contactName"]}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles["contactEmail"]}
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles["contactText"]}
            ></textarea>
            <div className={styles["buttonForm"]}>
              <button type="submit">Enviar</button>
            </div>
            <div className={styles["successError"]}>
              {formStatus === "success" && (
                <div className={styles["successMessage"]}>
                  ¡El formulario se ha enviado correctamente!
                </div>
              )}
              {formStatus === "error" && (
                <div className={styles["errorMessage"]}>
                  ¡No se pudo enviar el formulario! Por favor, inténtalo de
                  nuevo.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <footer className={styles["footer"]}>
        <h1>
          Copyright © 2023{" "}
          <a href="https://felipemoriones.vercel.app">Felipe</a>. All Rights
          Reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Contact;
