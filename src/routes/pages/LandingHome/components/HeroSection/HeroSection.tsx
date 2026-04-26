import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>안녕하세요, 개발자 조승현입니다.</h1>
      <p className={styles.subtitle}>
        새로운 기술과 사용자 경험을 고민하는 프론트엔드 개발자입니다.
      </p>
    </section>
  );
};

export default HeroSection;
