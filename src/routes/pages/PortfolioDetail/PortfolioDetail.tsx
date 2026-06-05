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

            <div className={styles.links}>
              {project.links.site && (
                <Link
                  to={project.links.site}
                  target="_blank"
                  className={styles.linkButton}
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
                >
                  {site.label}
                </Link>
              ))}
              {project.links.github && (
                <Link
                  to={project.links.github}
                  target="_blank"
                  className={styles.linkButton}
                >
                  깃허브
                </Link>
              )}
              {project.links.article && (
                <Link
                  to={project.links.article}
                  target="_blank"
                  className={styles.linkButton}
                >
                  기술 블로그
                </Link>
              )}
            </div>

            <h2 className={styles.sectionTitle}>Key Achievements</h2>
            <ul className={styles.achievementList}>
              {project.achievements.map((achieve, idx) => (
                <li key={idx}>{achieve}</li>
              ))}
            </ul>

            {project.detailSections?.map((section) => (
              <section key={section.title} className={styles.detailSection}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <ul className={styles.detailList}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
