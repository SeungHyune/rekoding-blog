import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          사용자 경험을 이해하는
          <br />
          <span className={styles.accent}>프론트엔드 개발자</span>
        </h1>
        <p className={styles.description}>
          디자인, 화면 설계부터 AI 서비스 연동까지,
          <br />
          프론트엔드를 중심으로 제품 전체를 빠르게 만듭니다.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
