import { useParams, useNavigate, Link } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "@/constants/projects";
import styles from "./portfolioDetail.module.css";
import NotFound from "../NotFound/NotFound";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className={styles.portfolioDetailPage}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ← Back to List
        </button>

        <div className={styles.detailCard}>
          <div className={styles.imageBox}>
            <img src={project.image} alt={project.title} />
          </div>

          <div className={styles.body}>
            <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <span className={styles.period}>{project.period}</span>
            </div>

            <p className={styles.desc}>{project.description}</p>

            <h2 className={styles.sectionTitle}>Key Achievements</h2>
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

            <div className={styles.links}>
              {project.links.site && (
                <Link
                  to={project.links.site}
                  target="_blank"
                  className={styles.linkButton}
                >
                  Visit Site
                </Link>
              )}
              {project.links.github && (
                <Link
                  to={project.links.github}
                  target="_blank"
                  className={styles.linkButton}
                >
                  GitHub
                </Link>
              )}
              {project.links.article && (
                <Link
                  to={project.links.article}
                  target="_blank"
                  className={styles.linkButton}
                >
                  Article
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
