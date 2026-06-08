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
            웹 디자이너로 커리어를 시작해 웹 퍼블리셔와 프론트엔드 개발자로
            경험을 쌓으며 사용자 경험(UX)을 깊이 이해하는 시야를 길렀습니다.
            현재는 AI 코딩 도구를 적극 활용하여, 프론트엔드를 넘어 백엔드 API
            구축과 AI 서비스 연동까지 직접 설계하고 구현하는 풀스택 개발자로
            성장했습니다.
          </p>
          <p className={styles.introText}>
            저의 개발은 항상 &apos;사용자의 불편함을 어떻게 해결할까&apos;라는
            문제 인식에서 시작됩니다. 눈에 보이는 화면을 넘어 그 이면의 데이터
            구조와 흐름까지 종합적으로 고민하며, 기획한 아이디어를 빠르게 실제
            동작하는 서비스로 구현해 내는 것을 중요하게 생각합니다.
          </p>
          <p className={styles.introText}>
            최근에는 7주 만에 기업 공식 홈페이지(웹/CMS)를 단독으로 풀스택 구축
            및 배포했으며, Gemini Live API를 활용한 실시간 음성 상담 서비스와
            RAG 기반 보험 상품 추천 파이프라인을 성공적으로 개발했습니다.
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
