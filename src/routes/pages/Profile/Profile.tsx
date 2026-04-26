import styles from "./profile.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <a href="/resume.pdf" download className={styles.downloadButton}>
            Download Resume (PDF)
          </a>
        </div>

        <div className={styles.resumeLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.profileImgBox}>
              <img
                src="/Users/joseunghyeon/.gemini/antigravity/brain/ff3cc552-fb49-4872-9c8e-2c2d27a8f9dd/developer_profile_photo_1777181097386.png"
                alt="Profile"
              />
            </div>
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
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introBox}>
                <p className={styles.desc}>
                  <strong>
                    일상 속 불편함을 해결하는 개발자 조승현입니다.
                  </strong>
                  <br />
                  개발의 시작은 불편함을 인식하고 이를 코드로 해결하는 데서
                  비롯된다고 생각합니다. 이를 통해, 사용자 경험을 개선하는
                  개발자가 되고 싶습니다.
                </p>
                <ul className={styles.bulletList}>
                  <li>
                    최근 프로젝트에서는 사용자 위치에 기반한 날씨 및 미세먼지
                    정보를 제공하여 산책하기 좋은 날씨인지 알려주는 기능을 개발,
                    이 과정에서 API 호출 함수를 병렬 처리하여 처리 속도를 50%
                    향상시켰고, 데이터를 캐싱하여 불필요한 API 호출 횟수를
                    최적화
                  </li>
                  <li>
                    많은 리스트를 불러올 때 화면에 보이는 영역만 렌더링하도록
                    처리하여, 초기 로딩 속도를 높이고 필요한 데이터만
                    렌더링하도록 최적화
                  </li>
                  <li>
                    입력 폼 작성 시 데이터를 임시저장하여 사용자가 페이지를
                    이탈한 경우에도 작성중이던 데이터를 불러올 수 있도록 처리
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Core Competency</h2>
              <div className={styles.competencyGrid}>
                <div className={styles.competencyCard}>
                  <h3>Mindset</h3>
                  <ul>
                    <li>
                      문제 발생 시 신속하게 원인을 파악하고, 팀과 협력하여
                      최적의 해결책을 찾아내는 것을 중요하게 생각합니다.
                    </li>
                    <li>
                      신뢰받는 동료가 되기 위해 기술적 역량을 성장시키며, 항상
                      더 나은 방향을 지속적으로 모색합니다.
                    </li>
                    <li>
                      변화에 빠르게 적응하기 위해 읽기 쉬운 코드와 확장하기 편한
                      구조로 개발합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.competencyCard}>
                  <h3>Communication</h3>
                  <ul>
                    <li>
                      웹디자인 및 퍼블리셔로서의 경험을 통해 UI/UX에 대한 깊은
                      이해를 갖추었으며, HTML/CSS 최적화와 크로스 브라우징 이슈
                      해결에 능숙합니다.
                    </li>
                    <li>
                      다양한 디자인 도구(Figma, PhotoShop 등)를 활용하여
                      팀원들과 아이디어를 쉽게 공유하고, 명확한 시각적
                      커뮤니케이션으로 팀의 협업을 더욱 강화하고자 합니다.
                    </li>
                    <li>
                      편안한 팀 분위기에서 자유롭게 소통할 수 있다고 믿으며,
                      다른 팀원들의 의견을 존중하며 협력하는 것을 중요하게
                      생각합니다.
                    </li>
                  </ul>
                </div>
                <div className={styles.competencyCard}>
                  <h3>Frontend</h3>
                  <ul>
                    <li>
                      디자인과 퍼블리싱 기술의 강점을 바탕으로 사용자 친화적이고
                      시각적으로 매력적인 웹 인터페이스를 전문적으로 구현합니다.
                    </li>
                    <li>
                      웹 접근성과 반응형 디자인을 고려해 다양한 디바이스에서
                      최적의 사용자 경험을 제공합니다.
                    </li>
                    <li>
                      React, Next.js, TypeScript 환경에서 개발하는 것을
                      좋아합니다.
                    </li>
                    <li>
                      CSR, SSR, SSG, ISR 방식의 차이점을 이해하고 있으며, 상황에
                      맞게 적절히 적용할 수 있습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillCategory}>
                <h3>JavaScript</h3>
                <ul>
                  <li>
                    실행 컨텍스트, 스코프 체인, 클로저 개념을 이해하고 있습니다.
                  </li>
                  <li>
                    이벤트 루프와 태스크 큐 기반의 비동기 처리 개념을 이해하고
                    있습니다. Promise와 Callback, async/await의 개념을 이해하고
                    있습니다.
                  </li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>React & Next.js</h3>
                <ul>
                  <li>
                    리액트 동작 원리와 Virtual DOM 랜더링 방식을 이해하고
                    있습니다. React Hooks과 생명주기 흐름을 이해하고 있습니다.
                  </li>
                  <li>
                    메모이제이션 기반 성능 최적화 방식을 이해하고 있습니다.
                  </li>
                  <li>
                    CSR, SSR, SSG, ISR 렌더링 방식 차이를 이해하고 있습니다. App
                    Router의 라우팅 개념을 이해하고 있습니다.
                  </li>
                  <li>
                    서버 액션과 FormData 기반 효율적 서버 상호작용을 이해하고
                    있습니다.
                  </li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>TypeScript</h3>
                <ul>
                  <li>
                    정적 타입 시스템의 런타임 오류 감소 원리를 이해하고
                    있습니다. 인터페이스 제네릭 기반 코드 확장성 개선 방식을
                    이해하고 있습니다.
                  </li>
                  <li>
                    유니온 타입 타입 가드의 타입 안전성 구현을 이해하고
                    있습니다.
                  </li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>HTML & CSS</h3>
                <ul>
                  <li>
                    시맨틱 태그 활용과 웹 접근성 표준을 이해하고 있습니다. ARIA
                    속성 적용 및 SEO 최적화 마크업 작성이 가능합니다.
                  </li>
                  <li>
                    공공기관 홈페이지 제작 경험으로 접근성 검증 절차를 숙지하고
                    있습니다.
                  </li>
                  <li>
                    미디어 쿼리와 Grid, Flex를 활용한 반응형 레이아웃을 이해하고
                    있습니다. 복잡한 구조의 UI 레이아웃 구성과 CSS 애니메이션
                    활용이 가능합니다.
                  </li>
                  <li>
                    크로스 브라우징 대응과 모던한 스타일링 코드 작성 경험이
                    있습니다.
                  </li>
                </ul>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>NestJS</span>
                <span className={styles.tag}>Node.js</span>
                <span className={styles.tag}>PostgreSQL</span>
                <span className={styles.tag}>Docker</span>
                <span className={styles.tag}>React Query</span>
                <span className={styles.tag}>Zustand</span>
                <span className={styles.tag}>Recoil</span>
                <span className={styles.tag}>Styled Component</span>
                <span className={styles.tag}>TailwindCSS</span>
                <span className={styles.tag}>CSS Modules</span>
                <span className={styles.tag}>SCSS</span>
                <span className={styles.tag}>Firebase</span>
                <span className={styles.tag}>Supabase</span>
                <span className={styles.tag}>Figma</span>
                <span className={styles.tag}>PhotoShop</span>
                <span className={styles.tag}>Illustrator</span>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Careers & Education</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>
                      2025.06 - 2026.05 (약 1년)
                    </span>
                    <h3 className={styles.company}>클레비씨에스</h3>
                    <span className={styles.role}>
                      Software Developer (Full-Stack)
                    </span>
                  </div>
                  <div className={styles.desc}>
                    <p className={styles.descParagraph}>
                      <strong>
                        AI 기반 보험 퍼미션 상담 및 맞춤형 추천 플랫폼 (IvyFin)
                        풀스택 개발
                      </strong>
                      <br />
                      프론트엔드 베이스를 바탕으로, AI 어시스턴트(AI Pair
                      Programming)를 적극 활용하여 새로운 기술 스택(NestJS)을
                      단기간에 학습 및 도입했습니다. B2B 고객 유입부터
                      하이브리드 RAG 엔진, 실시간 웹소켓 기반의{" "}
                      <strong>AI 채팅 특화 상담 및 음성 특화 상담</strong>에
                      이르는 End-to-End 풀스택 개발을 주도했습니다.
                    </p>
                  </div>
                  <ul className={styles.bulletList}>
                    <li>
                      <strong className={styles.highlightText}>
                        실시간 AI 음성 및 채팅 상담 환경 고도화
                      </strong>
                      <ul className={styles.subBulletList}>
                        <li>
                          AI의 실시간 음성/채팅 I/O 처리와 Tool Call 기반의
                          비즈니스 로직(정보 수집, 상품 조회)을 분리하는{" "}
                          <strong>
                            &apos;투 브레인(Two-Brain) 아키텍처&apos;
                          </strong>
                          를 기획 및 구현하여 세션 불안정성 해결.
                        </li>
                        <li>
                          트래픽 및 오류로 인한 웹소켓 단절 시, 백엔드의
                          conversationHistory Map 객체에 기존 이력을
                          덮어쓰기(Overwrite)하여 대화를 무중단으로 복구하는
                          세션 관리 로직 구현.
                        </li>
                        <li>
                          통화 종료 시 실제 발화 여부를 검증하여 유효한 녹음
                          파일만 Cloudflare에 저장하도록 설계, 스토리지 과금
                          최적화 달성.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong className={styles.highlightText}>
                        하이브리드 RAG 기반 추천 파이프라인 연동
                      </strong>
                      <ul className={styles.subBulletList}>
                        <li>
                          보험 상품 데이터를 파싱하여 Qdrant(Vector)와
                          Neo4j(Graph)에 적재하고 검색하는 하이브리드 추천 로직
                          구현 및 백엔드 연동.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong className={styles.highlightText}>
                        보안 및 게스트 인증 API 구축
                      </strong>
                      <ul className={styles.subBulletList}>
                        <li>
                          제휴사 배너 유입 시 토큰 탈취 방지를 위한 2분 TTL(단기
                          만료) 기반 비회원 Access Key 및 Redirect 인증 플로우
                          설계 및 구현.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong className={styles.highlightText}>
                        CI/CD 및 인프라 구축
                      </strong>
                      <ul className={styles.subBulletList}>
                        <li>
                          Docker를 활용한 컨테이너화 및 GitHub Actions를 통한
                          자동화된 배포 파이프라인 구축으로 개발 생산성 향상.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>2023.09 - 2024.03</span>
                    <h3 className={styles.company}>
                      프로그래머스 데브코스 수료
                    </h3>
                  </div>
                  <ul className={styles.bulletList}>
                    <li>
                      정규 커리큘럼 외 js/react 및 코딩 테스트 스터디 진행 (100+
                      문제 풀이)
                    </li>
                    <li>
                      협업 프로세스 체계화: Git Flow 브랜치 전략 도입, ESLint +
                      Prettier를 활용한 코드 컨벤션 통일
                    </li>
                    <li>
                      컴포넌트 주도 개발: Storybook 기반 UI 컴포넌트 문서화
                      시스템 구축, Atomic Design 패턴 적용
                    </li>
                    <li>
                      프로젝트를 통한 실무 역량 확보: REST API 설계 원칙 이해 및
                      JWT 인증 로직 구현
                    </li>
                  </ul>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>2021.03 - 2023.06</span>
                    <h3 className={styles.company}>메드소프트</h3>
                    <span className={styles.role}>운영팀/웹퍼블리셔</span>
                  </div>
                  <ul className={styles.bulletList}>
                    <li>
                      40개 이상의 웹사이트 제작, 고객 요구사항을 반영하여 품질
                      향상에 기여
                    </li>
                    <li>
                      고객과 소통하며 요청사항을 파악하고 문제를 해결, 연 매출
                      300% 증가에 기여
                    </li>
                    <li>
                      css 공통화 작업 및 스타일 규칙 정립: CSS 코드 중복을 40%
                      감소시켜 유지보수성을 향상시키고, 개발 시간 30% 단축
                    </li>
                    <li>
                      스타일 가이드 도입 이후 신규 프로젝트 시작 시 초기 설정
                      시간을 50% 절감하여 팀의 생산성 크게 향상
                    </li>
                  </ul>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>2018.11 - 2019.12</span>
                    <h3 className={styles.company}>(주)권홍아카데미</h3>
                    <span className={styles.role}>디자인팀/웹디자이너</span>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>2017.11 - 2018.07</span>
                    <h3 className={styles.company}>주식회사오엠와이</h3>
                    <span className={styles.role}>디자인팀/웹디자이너</span>
                  </div>
                  <ul className={styles.bulletList}>
                    <li>
                      제품 디자인 및 제품 출시 (샴푸 및 헤어클리닉 제품, 라벨
                      제작)
                    </li>
                    <li>자사 홈페이지 관리 및 인쇄물 제작</li>
                    <li>
                      쇼핑몰 상세 페이지 디자인 및 오픈마켓 판매 딜 배너 기획
                      전담
                    </li>
                  </ul>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.period}>중퇴</span>
                    <h3 className={styles.company}>중부대학교</h3>
                    <span className={styles.role}>엔터테인먼트학과</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
