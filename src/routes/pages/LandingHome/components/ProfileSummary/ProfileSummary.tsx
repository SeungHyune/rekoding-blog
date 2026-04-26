import { Link } from "react-router-dom";
import styles from "./profileSummary.module.css";

const ProfileSummary = () => {
  return (
    <section className={styles.profileSummary}>
      <h2 className={styles.sectionTitle}>Profile</h2>
      <div className={styles.content}>
        <p>
          끊임없이 배우고 성장하는 프론트엔드 개발자 조승현입니다. React,
          TypeScript, Vite 환경에서의 개발을 즐깁니다.
        </p>
      </div>
      <Link to="/profile" className={styles.moreButton}>
        프로필 더보기
      </Link>
    </section>
  );
};

export default ProfileSummary;
