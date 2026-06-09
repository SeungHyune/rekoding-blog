import styles from "./profile.module.css";
import { Link } from "react-router-dom";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "Zustand",
      "TailwindCSS",
      "Styled-Components",
    ],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "Socket.IO"],
  },
  {
    title: "AI & Infra",
    skills: ["Gemini Live API", "Qdrant", "RAG", "Docker"],
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
];

const CAREERS = [
  {
    company: "클레비씨에스 (Clevics)",
    role: "풀스택 개발자 (소프트웨어개발자/AI)",
    period: "2025.06 — 2026.04",
    keywords: [
      "풀스택 단독 구축",
      "자체 CMS 개발]",
      "실시간 AI 상담",
      "RAG 파이프라인",
    ],
    achievements: [
      "Clevi 공식 홈페이지를 7주 만에 기획·디자인·프론트엔드부터 서버(API)까지 단독으로 풀스택 구축 및 배포",
      "Tiptap 기반 자체 CMS와 Supabase Storage를 연동해, 비개발자도 기술 자료 및 뉴스를 직접 운영할 수 있는 환경 마련",
      "Gemini Live API와 Socket.IO 기반 실시간 웹소켓 통신을 구현하여 본인 확인부터 상담 예약까지의 전 과정을 자동화",
      "Qdrant(Vector DB) 기반 RAG 파이프라인을 구축해, 고객의 상담 맥락에 부합하는 보험 약관 데이터를 즉시 검색 및 추천",
    ],
  },
  {
    company: "메드소프트",
    role: "웹 퍼블리셔",
    period: "2021.03 — 2023.06",
    keywords: ["웹사이트 40개+ 제작", "CSS 공통화", "UI 템플릿 시스템"],
    achievements: [
      "HTML, CSS, JavaScript를 활용하여 40개 이상의 맞춤형 고객 웹사이트 제작 및 유지보수",
      "사내 공통 Base CSS 및 UI 템플릿을 주도적으로 규격화하여 CSS 코드 중복을 40% 감소시키고 유지보수성 향상",
      "사내 초기 프로젝트 솔루션과 연동되는 스타일 가이드를 구축하여, 신규 세팅 시간을 50% 절감하고 전체 팀 생산성 극대화",
    ],
  },
  {
    company: "(주)권홍아카데미",
    role: "웹 디자이너",
    period: "2018.11 — 2019.12",
    keywords: ["패키지 디자인", "브랜드 에셋 구축", "제품 라이프사이클"],
    achievements: [
      "샴푸 및 헤어 클리닉 라인의 용기, 성분 라벨, 패키지 박스 등 신제품 출시 전 과정의 디자인 전담",
      "자사 홈페이지 리뉴얼 및 전국 가맹점용 마케팅 인쇄물(현수막, 배너, 메뉴판 등) 제작으로 브랜드 일관성 유지",
      "기획부터 출시까지 이어지는 제품의 End-to-End 라이프사이클을 경험하며 비즈니스 목적에 맞는 실무 감각 축적",
    ],
  },
  {
    company: "주식회사오엠와이",
    role: "웹 디자이너",
    period: "2017.11 — 2018.07",
    keywords: ["이커머스 디자인", "프로모션 기획전", "상품 상세 페이지"],
    achievements: [
      "자사 쇼핑몰 상품 상세 페이지 기획 및 인물 보정 등 이커머스 콘텐츠의 시각적 완성도 개선",
      "오픈마켓 판매 딜 프로모션 배너 및 기획전 디자인을 전담하여 클릭률 및 세일즈 증대에 기여",
    ],
  },
];

const Profile = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <a
            href="/resume.pdf"
            download="조승현_이력서.pdf"
            className={styles.downloadButton}
          >
            이력서 PDF 다운로드
          </a>
        </div>

        <div className={styles.resumeLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.personalInfo}>
              <h1 className={styles.name}>조승현</h1>
              <p className={styles.englishName}>Seung Hyun Jo</p>
              <p className={styles.birth}>1994. 12. 26</p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span>Mobile</span>
                  <span>010-2822-7820</span>
                </div>
                <div className={styles.contactItem}>
                  <span>E-mail</span>
                  <span>tmdgus7820@naver.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span>Github</span>
                  <Link to="https://github.com/SeungHyune" target="_blank">
                    github.com/SeungHyune
                  </Link>
                </div>
                <div className={styles.contactItem}>
                  <span>Blog</span>
                  <Link to="https://velog.io/@rekoding/posts" target="_blank">
                    velog.io/@rekoding
                  </Link>
                </div>
                <div className={styles.contactItem}>
                  <span>Cert.</span>
                  <span>GTQ 1급</span>
                </div>
              </div>
            </div>
          </aside>

          <main className={styles.mainContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About</h2>
              <div className={styles.introBox}>
                <p className={styles.desc}>
                  <strong>
                    웹 디자이너에서 시작해 웹 퍼블리셔, 프론트엔드 개발자를 거쳐
                    현재는 백엔드와 AI 서비스까지 아우르는 풀스택 개발자입니다.
                  </strong>
                </p>
                <div>
                  <p className={styles.desc}>
                    저의 가장 큰 강점은 기획과 디자인부터 프론트엔드, 백엔드까지
                    프로덕트가 만들어지는 전체 과정을 직접 설계하고 구현할 수
                    있다는 점입니다. 화면을 설계하며 쌓은 사용자 경험(UX)에 대한
                    이해도를 바탕으로 시스템 전체의 구조를 짜고, AI 코딩 도구를
                    적극적으로 활용해 혼자서도 완성도 높은 서비스를 빠르게
                    구축해 냅니다.
                  </p>
                  <p className={styles.desc}>
                    최근에는 Gemini Live API 기반 실시간 음성 상담 서비스와 RAG
                    파이프라인 구축을 주도했고, 7주 만에 기업 홈페이지 전체를
                    단독으로 기획부터 배포까지 완료하며 그 실행력을
                    증명했습니다.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.competencyGrid}>
                {SKILL_GROUPS.map(({ title, skills }) => (
                  <div key={title} className={styles.competencyCard}>
                    <h3>{title}</h3>
                    <div className={styles.skillTags}>
                      {skills.map((skill) => (
                        <span key={skill} className={styles.tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Career Summary</h2>
              <div className={styles.timeline}>
                {CAREERS.map(
                  ({ company, role, period, keywords, achievements }) => (
                    <article key={company} className={styles.timelineItem}>
                      <div className={styles.timelineHeader}>
                        <span className={styles.period}>{period}</span>
                        <h3 className={styles.company}>{company}</h3>
                        <span className={styles.role}>{role}</span>
                      </div>
                      <div className={styles.skillTags}>
                        {keywords.map((keyword) => (
                          <span key={keyword} className={styles.tag}>
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <ul className={styles.bulletList}>
                        {achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </article>
                  ),
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
