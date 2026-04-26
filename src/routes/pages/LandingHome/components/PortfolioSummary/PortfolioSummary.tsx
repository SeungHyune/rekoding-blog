import { Link } from "react-router-dom";
import styles from "./portfolioSummary.module.css";

const PortfolioSummary = () => {
  return (
    <section className={styles.portfolioSummary}>
      <h2 className={styles.sectionTitle}>Portfolio</h2>
      <div className={styles.content}>
        <p>제가 진행한 대표 프로젝트들을 소개합니다.</p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>Project 1</div>
          <div className={styles.card}>Project 2</div>
        </div>
      </div>
      <Link to="/portfolio" className={styles.moreButton}>
        포트폴리오 더보기
      </Link>
    </section>
  );
};

export default PortfolioSummary;
