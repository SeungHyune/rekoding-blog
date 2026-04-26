import React, { useState } from "react";
import styles from "./portfolio.module.css";
import { Link } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "@/constants/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PORTFOLIO_PROJECTS)[0] | null
  >(null);

  const handleCardClick = (project: (typeof PORTFOLIO_PROJECTS)[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>PROJECTS</h1>
          <div className={styles.headerLine}></div>
        </header>

        <div className={styles.projectGrid}>
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => handleCardClick(project)}
            >
              <div className={styles.imageBox}>
                <img src={project.image} alt={`${project.title} 썸네일`} />
                <div className={styles.imageOverlay}>
                  {project.links.site && (
                    <Link
                      to={project.links.site}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site
                    </Link>
                  )}
                  {project.links.github && (
                    <Link
                      to={project.links.github}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </Link>
                  )}
                  {project.links.article && (
                    <Link
                      to={project.links.article}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Article
                    </Link>
                  )}
                </div>
              </div>

              <div className={styles.contentBox}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <span className={styles.period}>{project.period}</span>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>

                <ul className={styles.achievementList}>
                  {project.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className={styles.modalImage}>
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <span className={styles.modalPeriod}>
                {selectedProject.period}
              </span>
              <p className={styles.modalDesc}>{selectedProject.description}</p>

              <h3 className={styles.modalSectionTitle}>Key Achievements</h3>
              <ul className={styles.modalAchievementList}>
                {selectedProject.achievements.map((achieve, idx) => (
                  <li key={idx}>{achieve}</li>
                ))}
              </ul>

              <div className={styles.modalTags}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className={styles.modalTag}>
                    #{tag}
                  </span>
                ))}
              </div>

              <div className={styles.modalLinks}>
                {selectedProject.links.site && (
                  <Link
                    to={selectedProject.links.site}
                    target="_blank"
                    className={styles.modalLinkButton}
                  >
                    Visit Site
                  </Link>
                )}
                {selectedProject.links.github && (
                  <Link
                    to={selectedProject.links.github}
                    target="_blank"
                    className={styles.modalLinkButton}
                  >
                    GitHub
                  </Link>
                )}
                {selectedProject.links.article && (
                  <Link
                    to={selectedProject.links.article}
                    target="_blank"
                    className={styles.modalLinkButton}
                  >
                    Article
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
