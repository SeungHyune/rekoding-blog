import { Link } from "react-router-dom";
import styles from "./profileSummary.module.css";

const ProfileSummary = () => {
  return (
    <section className={styles.profileSummary}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>RESUME</div>
          <h2 className={styles.title}>About Me</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.infoGroup}>
            <h3 className={styles.infoTitle}>Education</h3>
            <p className={styles.infoText}>
              가천대학교 한국어문학과, 디자인학부 시각디자인전공 (졸업예정)
            </p>
          </div>
          <div className={styles.infoGroup}>
            <h3 className={styles.infoTitle}>Skills</h3>
            <div className={styles.skillList}>
              <span className={styles.skillBadge}>React</span>
              <span className={styles.skillBadge}>TypeScript</span>
              <span className={styles.skillBadge}>Vite</span>
              <span className={styles.skillBadge}>Firebase</span>
            </div>
          </div>
        </div>
        <Link to="/profile" className={styles.moreButton}>
          VIEW PROFILE →
        </Link>
      </div>
    </section>
  );
};

export default ProfileSummary;
