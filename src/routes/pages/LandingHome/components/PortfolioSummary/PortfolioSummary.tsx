import { Link, useNavigate } from "react-router-dom";
import styles from "./portfolioSummary.module.css";
import { PORTFOLIO_PROJECTS } from "@/constants/projects";

const PortfolioSummary = () => {
  const navigate = useNavigate();
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className={styles.portfolioSummary}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>CONTENTS</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.list}>
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className={styles.item}
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className={styles.itemMain}>
                <span className={styles.number}>{project.id}</span>
                <div className={styles.itemInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
                <div className={styles.arrowButton}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <div className={styles.tags}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link to="/portfolio" className={styles.moreButton}>
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSummary;
