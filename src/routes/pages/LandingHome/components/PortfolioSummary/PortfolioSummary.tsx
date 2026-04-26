import { Link } from "react-router-dom";
import styles from "./portfolioSummary.module.css";

const PROJECTS = [
  {
    id: "01",
    title: "UX/UI RENEWAL WEBSITE",
    description: "무인양품 웹사이트 UX/UI 개선 프로젝트",
    tags: ["#추진력과 실행력", "#사용성테스트", "#ASIS-TOBE"],
  },
  {
    id: "02",
    title: "UX/UI RESPONSIVE WEBSITE",
    description: "디무브 웹사이트 UX/UI 기획 프로젝트",
    tags: ["#기획과 아이디어", "#소통하고 협업하는", "#UX분석"],
  },
];

const PortfolioSummary = () => {
  return (
    <section className={styles.portfolioSummary}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>CONTENTS</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.item}>
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
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
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
