import styles from "./portfolio.module.css";

const PROJECTS = [
  {
    id: "01",
    title: "UX/UI RENEWAL WEBSITE",
    subtitle: "무인양품 웹사이트 UX/UI 개선 프로젝트",
    info: "1인 프로젝트 (UX 기획, UI 디자인 100%)",
    tags: ["#추진력과 실행력", "#사용성테스트", "#ASIS-TOBE"],
  },
  {
    id: "02",
    title: "UX/UI RESPONSIVE WEBSITE",
    subtitle: "디무브 웹사이트 UX/UI 기획 프로젝트",
    info: "4인 팀 프로젝트 (UX 기획, UI 디자인 35%)",
    tags: ["#기획과 아이디어", "#소통하고 협업하는", "#UX분석"],
  },
  {
    id: "03",
    title: "INTERACTION WEBSITE",
    subtitle: "마샬 인터랙션 웹사이트 리뉴얼 프로젝트",
    info: "1인 프로젝트 (UI 디자인, 코딩 100%)",
    tags: ["#스크롤트리거", "#GSAP인터랙션", "#퍼블리싱 스킬"],
  },
  {
    id: "04",
    title: "GUI RENEWAL WEBSITE",
    subtitle: "템버린즈 웹사이트 리뉴얼 프로젝트",
    info: "1인 프로젝트 (GUI 디자인 100%)",
    tags: ["#감각적인 디자인", "#브랜드 무드", "#그래픽 디자인"],
  },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolioPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>CONTENTS</h1>
          <div className={styles.headerLine}></div>
        </header>

        <div className={styles.projectList}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projectItem}>
              <div className={styles.itemMain}>
                <span className={styles.number}>{project.id}</span>
                <div className={styles.content}>
                  <div className={styles.titles}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>

                  <div className={styles.details}>
                    <p className={styles.projectInfo}>{project.info}</p>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className={styles.arrowButton}>
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
