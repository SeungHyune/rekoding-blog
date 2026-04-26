import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.portfolioContainer}>
      <h1 className={styles.pageTitle}>Portfolio</h1>
      <article className={styles.content}>
        <p>상세 포트폴리오 프로젝트 목록이 들어갈 예정입니다.</p>
        {/* TODO: Add project grid here */}
      </article>
    </section>
  );
};

export default Portfolio;
