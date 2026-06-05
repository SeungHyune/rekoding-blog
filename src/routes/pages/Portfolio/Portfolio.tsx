import styles from "./portfolio.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "@/constants/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/portfolio/${id}`);
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
              onClick={() => handleCardClick(project.id)}
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
                      {project.links.siteLabel ?? "사이트 방문"}
                    </Link>
                  )}
                  {project.links.additionalSites?.map((site) => (
                    <Link
                      key={site.url}
                      to={site.url}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {site.label}
                    </Link>
                  ))}
                  {project.links.github && (
                    <Link
                      to={project.links.github}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      깃허브
                    </Link>
                  )}
                  {project.links.article && (
                    <Link
                      to={project.links.article}
                      target="_blank"
                      className={styles.linkButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      기술 블로그
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
    </div>
  );
};

export default Portfolio;
