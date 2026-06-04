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
    company: "클레비씨에스 (Clevi CES)",
    role: "풀스택 개발자 (소프트웨어개발자/AI)",
    period: "2025.06 — 2026.04",
    keywords: [
      "Clevi 홈페이지 & CMS 단독 개발",
      "IvyFin AI 음성 상담 플랫폼",
      "RAG 파이프라인",
    ],
    achievements: [
      "Clevi 공식 홈페이지를 7주 만에 기획·디자인·프론트엔드·백엔드·배포까지 단독으로 완료",
      "Tiptap 기반 CMS와 Supabase Storage를 연동해 비개발자가 기술자료·뉴스 콘텐츠를 직접 운영할 수 있는 구조 구축",
      "Gemini Live API와 Socket.IO 기반 실시간 음성 상담 흐름을 구현해 본인 확인부터 상담 예약까지 자동화",
      "Qdrant 기반 RAG 파이프라인을 구축해 보험 약관 데이터를 상담 맥락에 맞게 검색·추천하는 구조 구현",
    ],
  },
  {
    company: "메드소프트",
    role: "웹 퍼블리셔",
    period: "2021.03 — 2023.06",
    keywords: ["웹사이트 40개+ 제작", "CSS 공통화", "코드 중복 40% 감소"],
    achievements: [
      "HTML, CSS, JavaScript 기반 웹사이트 40개 이상 제작 및 고객 요구사항 반영",
      "사내 CSS 공통화와 스타일 규칙을 정립해 코드 중복을 40% 줄이고 유지보수성을 개선",
      "신규 프로젝트 초기 설정 시간을 50% 절감하는 스타일 가이드 기반 작업 흐름 구축",
    ],
  },
  {
    company: "(주)권홍아카데미",
    role: "웹 디자이너",
    period: "2018.11 — 2019.12",
    keywords: ["제품 디자인", "홈페이지 디자인 · 관리", "인쇄물 제작"],
    achievements: [
      "샴푸 및 헤어클리닉 제품 디자인, 제품 박스, 로고, 성분 라벨 등 제품 출시 과정에 필요한 디자인 작업 수행",
      "자사 홈페이지 디자인·관리와 체인점 현수막, 배너, POP, 메뉴판 등 인쇄물 제작 담당",
      "제품 용기부터 라벨, 패키지까지 하나의 제품이 완성되는 과정을 경험하며 브랜드 접점 전반의 디자인 감각 축적",
    ],
  },
  {
    company: "주식회사오엠와이",
    role: "웹 디자이너",
    period: "2017.11 — 2018.07",
    keywords: [
      "쇼핑몰 홈페이지 관리",
      "상세 페이지 디자인",
      "오픈마켓 배너 디자인",
    ],
    achievements: [
      "쇼핑몰 홈페이지 관리와 상품 상세 페이지 디자인을 담당하며 온라인 판매 화면 제작 경험 확보",
      "인물 보정 작업과 상품 이미지 편집을 수행해 커머스 콘텐츠의 시각적 완성도 개선",
      "오픈마켓 판매 딜 배너 디자인을 전담하며 프로모션 목적에 맞는 시각 커뮤니케이션 작업 수행",
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
                    웹디자이너에서 퍼블리셔, 프론트엔드를 거쳐 이제는 백엔드와
                    AI 서비스까지 직접 만드는 개발자입니다.
                  </strong>
                </p>
                <div>
                  <p className={styles.desc}>
                    화면을 만들던 시절부터 쌓아온 사용자 감각을 바탕으로, 지금은
                    시스템 전체를 설계하고 구현합니다. 혼자서
                    기획·디자인·프론트· 백엔드를 모두 가져가는 것이 저의
                    방식이고, AI를 적극적으로 활용해 혼자서도 빠르게 완성도 높은
                    서비스를 만들어냅니다.
                  </p>
                  <p className={styles.desc}>
                    최근에는 Gemini Live API 기반 실시간 음성 상담 서비스와 RAG
                    파이프라인 구축을 주도했고, 7주 만에 기업 홈페이지 전체를
                    단독으로 기획부터 배포까지 완료했습니다.
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
