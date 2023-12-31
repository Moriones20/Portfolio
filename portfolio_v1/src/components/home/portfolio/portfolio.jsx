import React, { useState } from "react";
import portfolioData from "../../../assets/portfolio.json";
import styles from "./portfolio.module.css";
import ReactPaginate from "react-paginate";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 1;

  const indexOfLastProject = (currentPage + 1) * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = portfolioData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className={styles["containerPortfolio"]}>
      <h1>Proyectos</h1>
      <div className={styles["containerPaginate"]}>
        <div className={styles["projects"]}>
          {currentProjects.map((project) => (
            <div key={project.name} className={styles["project"]}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="object-cover opacity-0"
                onLoad={(e) => {
                  e.target.classList.add("opacity-100");
                  e.target.previousElementSibling.style.display = "none";
                }}
              />
              <h2>{project.name}</h2>
              <h3>{project.description}</h3>
              <p>{project.tech}</p>
              <div className={styles["links-btn"]}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={styles["iconInternet"]}
                  >
                    <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                  </svg>
                </a>
                {project.web && (
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitio web
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className={styles["iconInternet"]}
                    >
                      <path d="M8.3,3.213l9.468,8.836c0.475,0.443,0.2,1.24-0.447,1.296L13.2,13.7l2.807,6.21c0.272,0.602,0.006,1.311-0.596,1.585l0,0 c-0.61,0.277-1.33,0-1.596-0.615L11.1,14.6l-2.833,2.695C7.789,17.749,7,17.411,7,16.751V3.778C7,3.102,7.806,2.752,8.3,3.213z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(portfolioData.length / projectsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          className={styles["paginateTech"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
