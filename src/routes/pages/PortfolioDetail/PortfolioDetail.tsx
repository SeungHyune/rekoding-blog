import { useParams, useNavigate } from "react-router-dom";
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
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkItem}
                >
                  <span className={styles.linkLabel}>
                    🔗{" "}
                    {project.links.siteDetailLabel ??
                      project.links.siteLabel ??
                      "사이트 방문"}
                  </span>
                  <span className={styles.linkUrl}>{project.links.site}</span>
                </a>
              )}
              {project.links.additionalSites?.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkItem}
                >
                  <span className={styles.linkLabel}>
                    🔗 {site.detailLabel ?? site.label}
                  </span>
                  <span className={styles.linkUrl}>{site.url}</span>
                </a>
              ))}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkItem}
                >
                  <span className={styles.linkLabel}>💻 깃허브</span>
                  <span className={styles.linkUrl}>{project.links.github}</span>
                </a>
              )}
              {project.links.article && (
                <a
                  href={project.links.article}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkItem}
                >
                  <span className={styles.linkLabel}>📝 기술 블로그</span>
                  <span className={styles.linkUrl}>
                    {project.links.articleLabel ?? project.links.article}
                  </span>
                </a>
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
