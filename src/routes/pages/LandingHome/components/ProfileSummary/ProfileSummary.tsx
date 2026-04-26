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

        <div className={styles.introBox}>
          <p className={styles.introText}>
            일상 속 불편함을 해결하는 개발자 <strong>조승현</strong>입니다.
            <br />
            개발의 시작은 불편함을 인식하고 이를 코드로 해결하는 데서 비롯된다고
            생각합니다.
            <br />
            이를 통해 사용자 경험을 개선하는 개발자가 되고 싶습니다.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoGroup}>
            <h3 className={styles.infoTitle}>Education</h3>
            <p className={styles.infoText}>
              중부대학교 엔터테인먼트학과 (중퇴)
            </p>
            <p className={styles.infoText}>
              프로그래머스 데브코스 프론트엔드 수료
            </p>
          </div>
          <div className={styles.infoGroup}>
            <h3 className={styles.infoTitle}>Careers</h3>
            <p className={styles.infoText}>
              클레비씨에스 개발팀/풀스택 개발자 (2025.06-2026.05)
            </p>
            <p className={styles.infoText}>
              메드소프트 운영팀/웹퍼블리셔 (2021.03-2023.06)
            </p>
            <p className={styles.infoText}>
              (주)권홍아카데미 디자인팀/웹디자이너 (2018.11-2019.12)
            </p>
            <p className={styles.infoText}>
              주식회사오엠와이 디자인팀/웹디자이너 (2017.11-2018.07)
            </p>
          </div>
          <div className={styles.infoGroup}>
            <h3 className={styles.infoTitle}>Skills</h3>
            <div className={styles.skillList}>
              <span className={styles.skillBadge}>TypeScript</span>
              <span className={styles.skillBadge}>React</span>
              <span className={styles.skillBadge}>Next.js</span>
              <span className={styles.skillBadge}>NestJS</span>
              <span className={styles.skillBadge}>Node.js</span>
              <span className={styles.skillBadge}>PostgreSQL</span>
              <span className={styles.skillBadge}>Docker</span>
              <span className={styles.skillBadge}>Zustand</span>
              <span className={styles.skillBadge}>React Query</span>
              <span className={styles.skillBadge}>Recoil</span>
              <span className={styles.skillBadge}>Styled Component</span>
              <span className={styles.skillBadge}>TailwindCSS</span>
              <span className={styles.skillBadge}>SCSS</span>
              <span className={styles.skillBadge}>Firebase</span>
              <span className={styles.skillBadge}>Figma</span>
              <span className={styles.skillBadge}>PhotoShop</span>
              <span className={styles.skillBadge}>Illustrator</span>
            </div>
          </div>
        </div>
        <Link to="/profile" className={styles.moreButton}>
          VIEW DETAILED PROFILE →
        </Link>
      </div>
    </section>
  );
};

export default ProfileSummary;
