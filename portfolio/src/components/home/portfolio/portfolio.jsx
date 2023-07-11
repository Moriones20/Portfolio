import React, { useState } from "react";
import portfolioData from "../../../assets/portfolio.json";
import styles from "./portfolio.module.css";
import ReactPaginate from "react-paginate";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2; // Cantidad de proyectos a mostrar por página

  // Cálculo de índices para la segmentación de los datos
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
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <h3>{project.description}</h3>
              <p>{project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Repositorio
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" className={styles["iconInternet"]}>
                  <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                </svg>
              </a>
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
