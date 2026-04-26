import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          무한한 성장의 <span className={styles.accent}>잠재력</span>을 가진
          <br />
          프론트엔드 개발자 조승현입니다.
        </h1>
        <p className={styles.description}>
          사용자의 시선으로 기획하고, 감각적인 경험을 제공하겠습니다.
          <br />
          끊임없는 도전을 통해 한계를 넘어서는 개발자가 되겠습니다.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
