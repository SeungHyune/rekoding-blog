import { Link } from "react-router-dom";
import styles from "./profileSummary.module.css";

const ProfileSummary = () => {
  return (
    <section className={styles.profileSummary}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>ABOUT</div>
          <h2 className={styles.title}>About Me</h2>
        </div>

        <div className={styles.introBox}>
          <p className={styles.introText}>
            웹디자이너로 시작해 퍼블리셔, 프론트엔드를 거치며 사용자 감각을
            쌓았고, 지금은 AI 코딩 도구를 적극 활용해 백엔드 API 구축과 AI
            서비스 연동까지 직접 해냅니다.
          </p>
          <p className={styles.introText}>
            개발은 항상 &apos;사용자의 불편함을 어떻게 해결할까&apos;에서
            출발합니다. 눈에 보이는 화면뿐 아니라 그 안의 구조와 흐름까지 함께
            고민하고, 빠르게 실제로 동작하는 서비스를 만드는 것을 중요하게
            생각합니다.
          </p>
          <p className={styles.introText}>
            7주 만에 기업 홈페이지 전체를 단독으로 기획·배포했고, Gemini Live
            API 기반 실시간 음성 상담 서비스와 RAG 보험 상품 추천 파이프라인
            개발에 참여했습니다.
          </p>
        </div>
        <Link to="/profile" className={styles.moreButton}>
          Profile 보기 →
        </Link>
      </div>
    </section>
  );
};

export default ProfileSummary;
