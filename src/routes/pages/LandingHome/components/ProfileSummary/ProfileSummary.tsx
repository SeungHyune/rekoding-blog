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
            사용자와 가장 가까운 곳에서 시작해 시스템 전체를 고민하는 개발자{" "}
            <strong>조승현</strong>입니다.
            <br />
            화면과 경험을 개선하는 일에서 출발해, AI 상담 플랫폼의 백엔드
            아키텍처와 인프라까지 확장하고 있습니다.
            <br />
            복잡한 비즈니스 요구사항을 실제 동작하는 서비스로 구현하는 것을
            좋아합니다.
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
              클레비씨에스 소프트웨어개발자/풀스택·AI (2025.06-2026.04)
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
              <span className={styles.skillBadge}>Prisma</span>
              <span className={styles.skillBadge}>PostgreSQL</span>
              <span className={styles.skillBadge}>Socket.IO</span>
              <span className={styles.skillBadge}>Gemini Live API</span>
              <span className={styles.skillBadge}>Qdrant</span>
              <span className={styles.skillBadge}>Docker</span>
              <span className={styles.skillBadge}>Zustand</span>
              <span className={styles.skillBadge}>next-intl</span>
              <span className={styles.skillBadge}>Tiptap</span>
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
