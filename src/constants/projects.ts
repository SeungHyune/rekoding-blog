type DetailTable = {
  title?: string;
  headers: string[];
  rows: string[][];
  highlightColumns?: number[];
};

type DetailTextItem =
  | string
  | {
      text: string;
      href: string;
    };

type PortfolioProject = {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  links: {
    site: string;
    siteLabel?: string;
    siteDetailLabel?: string;
    additionalSites?: {
      label: string;
      detailLabel?: string;
      url: string;
    }[];
    github: string;
    githubLabel?: string;
    article?: string;
    articleLabel?: string;
  };
  achievements: string[];
  detailSections?: {
    title: string;
    items: DetailTextItem[];
    problemSolutions?: {
      problem: string;
      solutions: DetailTextItem[];
    }[];
    table?: DetailTable;
    tables?: DetailTable[];
  }[];
  tags: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "01",
    title: "IvyFin AI 보험 상담 플랫폼",
    period: "2026.01 ~ 2026.04",
    description:
      "보험 보장분석 상담 신청 고객을 대상으로 1차 상담 접수부터 건강 데이터 기반 상담 및 맞춤형 상품 추천까지 이어지는 End-to-End AI 플랫폼",
    image: "/images/thumbnail/ivyfin_thumbnail.svg",
    links: {
      site: "https://ivyfinsult-gai.clevics.co.kr",
      siteLabel: "[1차] AI 사전 접수 서비스",
      siteDetailLabel: "[1차] AI 사전 접수 서비스 (고객 인증 및 상담 예약)",
      additionalSites: [
        {
          label: "[2차] AI 심층 상담 서비스",
          detailLabel: "[2차] AI 심층 상담 서비스 (보장분석 및 상품 추천)",
          url: "https://ivyfinsult.clevics.co.kr",
        },
      ],
      github: "",
      article: "/post/yFQcOJePdHfRym1ozEwv",
      articleLabel:
        "AI 음성 상담부터 RAG 상품 추천까지: IvyFin 풀스택 개발 회고",
    },
    achievements: [
      "Gemini Live와 Socket.IO 기반 실시간 웹소켓 파이프라인으로 본인 확인부터 상담 예약까지의 접수 프로세스 자동화",
      "네트워크 단절 시 conversationHistory와 마지막 AI 응답 상태를 기반으로 상담 맥락을 복원하는 세션 재연결 로직 구현",
      "LLM Tool Calling 기반 상담 상태 관리와 서버 측 검증 플로우로 정보 누락·중복 단계 전환·조기 예약 완료 방지",
      "30자리 Access Key와 2분 TTL, Redirect URL 구조를 활용한 외부 제휴사 비회원 인증 인프라 구축",
      "Qdrant(Vector DB) 기반 RAG 상품 추천 파이프라인과 관리자 업로드 기반 지식베이스 갱신 구조 구현",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "보험 보장분석 상담 신청 고객을 대상으로 1차 상담 접수부터 건강 데이터 기반 상담 및 맞춤형 상품 추천까지 이어지는 End-to-End AI 플랫폼을 주도하여 개발했습니다.",
          "상담사가 직접 수행하던 접수 과정을 AI 음성·채팅으로 자동화하고, 고객 정보와 건강검진 데이터를 기반으로 RAG 상품 추천 파이프라인을 유기적으로 연결했습니다.",
        ],
      },
      {
        title:
          "[Gemini Live / Socket.IO] 실시간 상담 및 접수 프로세스 완전 자동화",
        items: [
          "Gemini Live와 Socket.IO 기반의 실시간 웹소켓 파이프라인을 구축하여 본인 확인부터 심사 필수 정보 수집, 상담 예약까지의 전 과정을 자동화했습니다.",
          "AI 상담 흐름과 예약 프로세스를 연결하여 24시간 공휴일·야간 무중단 상담 응대 체계를 실현했습니다.",
          "네트워크 단절 시 백엔드 In-Memory(Map 객체)의 conversationHistory와 마지막 AI 응답 상태를 기반으로 상담 맥락을 완벽히 복원하는 무중단 세션 재연결 로직을 구현하여 음성 상담의 연속성을 대폭 개선했습니다.",
        ],
      },
      {
        title: "[LLM Tool Calling] 기반 상담 상태 관리 및 검증 플로우 구축",
        items: [
          "LLM의 Tool Call을 활용해 AI 응답 생성과 동시에 고객 정보 기록, 상담 단계 전환, 예약 완료 처리가 백엔드와 실시간으로 동기화되도록 구현했습니다.",
          "필수 정보 누락, 중복 단계 전환, 조기 예약 완료 등 실시간 대화 중 발생할 수 있는 이상 행동을 방지하기 위해 엄격한 서버 측 검증 아키텍처를 추가하여 시스템 안정성을 확보했습니다.",
        ],
      },
      {
        title:
          "[Authentication / TTL] 외부 제휴사 유입 고객 인증 및 보안 진입 플로우 설계",
        items: [
          "외부 제휴사 고객 정보를 기반으로 동적 상담 세션을 생성했습니다.",
          "30자리 Access Key와 2분 TTL(단기 만료), Redirect URL 구조를 설계하여 별도의 회원가입 없이도 안전하게 상담에 진입할 수 있는 비회원 인증 인프라를 구축했습니다.",
        ],
      },
      {
        title: "[Qdrant / Vector DB] RAG 기반 보험 상품 추천 파이프라인 구축",
        items: [
          "고객의 나이, 성별, 관심 보장 조건으로 1차 필터링을 거친 후 Qdrant(Vector DB)의 시맨틱 검색을 통해 고객의 상담 맥락에 부합하는 보험 상품 약관 데이터를 찾아 AI 추천 로직에 연동했습니다.",
          "관리자 대시보드를 통한 업로드 기반 지식베이스 갱신 구조를 구축하여 최신 보험 상품 정보를 실시간 추천 결과에 즉시 반영할 수 있도록 운영 프로세스를 개선했습니다.",
        ],
      },
    ],
    tags: ["NestJS", "Gemini Live", "Socket.IO", "Qdrant", "RAG"],
  },
  {
    id: "02",
    title: "Clevi 기업 홈페이지 & 관리자 CMS",
    period: "2025.07 ~ 2025.09",
    description:
      "AI 챗봇, 멀티모달 LLM, 에이전트, 온프레미스·온디바이스 AI 솔루션을 제공하는 Clevi의 공식 홈페이지와 관리자 CMS를 단독 개발한 프로젝트",
    image: "/images/thumbnail/clevi_thumbnail.svg",
    links: {
      site: "https://clevi.ai",
      siteLabel: "프로젝트",
      siteDetailLabel: "프로젝트",
      github: "",
      article: "/post/ZorvteO3lPSF1zxWxzDl",
      articleLabel: "비전공 신입 개발자의 도전기: 회사 홈페이지를 직접 만들다",
    },
    achievements: [
      "Clevi 공식 홈페이지를 단독으로 기획, 디자인, 프론트엔드, 백엔드까지 개발",
      "Tiptap 기반 WYSIWYG 에디터와 Supabase Storage를 연동한 기술자료·뉴스 콘텐츠 관리자 CMS 구축",
      "콘텐츠 운영 방식을 '개발자 코드 배포 → 반영' 구조에서 '관리자 직접 수정 → 즉시 반영' 구조로 전환",
      "next-intl 기반 한국어·영어 다국어 라우팅 구조 설계",
      "JWT 기반 관리자 인증 및 토큰 갱신 플로우, LLM API Key 보호를 위한 백엔드 프록시 구조 설계",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "AI 챗봇, 멀티모달 LLM, 에이전트, 온프레미스·온디바이스 AI 솔루션을 제공하는 Clevi의 공식 홈페이지를 단독으로 기획, 디자인, 프론트엔드, 백엔드까지 개발했습니다.",
          "소개 페이지에 그치지 않고 기술자료·뉴스 콘텐츠를 비개발자가 직접 운영할 수 있는 관리자 CMS까지 함께 구축했습니다.",
        ],
      },
      {
        title: "[Next.js / Tiptap] 콘텐츠 관리자 CMS 구축",
        items: [
          "Tiptap 기반 WYSIWYG 에디터와 Supabase Storage를 연동한 관리자 CMS를 구축하여 비개발자가 기술자료·뉴스 콘텐츠를 직접 등록·수정·이미지 교체할 수 있는 운영 환경을 마련했습니다.",
          "콘텐츠 운영 방식을 '개발자 코드 배포 → 반영' 구조에서 '관리자 직접 수정 → 즉시 반영' 구조로 전환하여 콘텐츠 작업 시 개발자 개입을 1명 → 0명으로 단축했습니다.",
        ],
      },
      {
        title: "[next-intl] 글로벌 확장을 위한 다국어 라우팅 설계",
        items: [
          "next-intl 기반 다국어 라우팅 구조를 설계하여 한국어·영어 콘텐츠 확장이 가능한 홈페이지 아키텍처를 구축했습니다.",
        ],
      },
      {
        title: "[Security] JWT 인증 및 LLM API Key 보호를 위한 프록시 설계",
        items: [
          "JWT 기반 관리자 인증 및 토큰 갱신 플로우를 구현했습니다.",
          "LLM API Key 보호를 위한 백엔드 프록시 구조를 설계하여 안전성을 확보했습니다.",
        ],
      },
    ],
    tags: ["Next.js", "Node.js", "Tiptap", "Supabase", "next-intl"],
  },
  {
    id: "03",
    title: "마실가실",
    period: "2024.02 - 2024.05",
    description: "산책을 기록하고 공유하며 색다른 산책 경험을 도와주는 서비스",
    image: "/images/thumbnail/masilgasil_thumbnail.svg",
    links: {
      site: "https://masilgasil.vercel.app/",
      siteLabel: "프로젝트",
      siteDetailLabel: "프로젝트",
      github:
        "https://github.com/Team-SilverTown/Team-SilverTown-MasilGasil-FE",
      githubLabel: "저장소",
    },
    achievements: [
      "조건부 캐싱, Geolocation, Zustand Persist, Promise.allSettled를 활용해 불필요한 API 호출과 로딩 지연 개선",
      "react-virtualized 가상화를 도입해 무한 스크롤 리스트의 렌더링 성능과 DOM 노드 수 최적화",
      "디바운스를 활용한 낙관적 업데이트로 '좋아요' API 서버 부하 99.4% 감소",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "산책을 기록하고 공유하며 색다른 산책 경험을 도와주는 서비스입니다.",
          "홈 화면 데이터 호출, 리스트 무한 스크롤, 좋아요 상태 업데이트 과정에서 발생하는 성능 문제를 중심으로 개선했습니다.",
        ],
      },
      {
        title: "불필요한 API 호출 및 속도 지연 문제 해결",
        items: [
          "API 호출을 병렬 처리하여 처리 속도를 개선하고, Zustand Persist 기반 캐싱으로 반복 호출을 줄였습니다.",
          {
            text: "zustand persist를 통한 API 호출 최적화: 기존 5번 방문 시 5번 호출 → 개선 5번 방문 시 1번 호출 (80% 감소)",
            href: "/post/3ch3jrFFiZI8BZanhd3w",
          },
          "지연 로딩 UI를 추가해 완료된 데이터부터 먼저 보여주며 사용자 경험을 개선했습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "홈 화면에 접속할 때마다 날씨 및 미세먼지 정보가 변경되지 않았음에도 API 호출이 반복적으로 발생했습니다.",
            solutions: [
              "조건부 캐싱 전략을 통해 데이터 변경 시점에만 재호출되도록 개선했습니다.",
              "Geolocation API를 활용해 사용자 위치가 100m 이상 이동한 경우에만 위치 기반 데이터를 재호출하도록 구현했습니다.",
              "Zustand Persist로 로컬 캐시를 도입하고 30분 유효시간을 설정하여 유효시간이 지난 경우에만 재호출되도록 구현했습니다.",
            ],
          },
          {
            problem:
              "날씨, 측정소, 미세먼지 정보를 순차적으로 호출하면서 데이터 로딩이 지연되는 문제가 있었습니다.",
            solutions: [
              "날씨, 측정소, 미세먼지 API를 Promise.allSettled로 병렬 호출하여 처리 속도를 향상했습니다.",
              "데이터 로딩 지연을 줄이기 위해 로딩 스켈레톤을 적용하고, 완료된 데이터부터 우선 보여주도록 개선했습니다.",
            ],
          },
        ],
        tables: [
          {
            title: "병렬 처리 성과",
            headers: ["개선 항목", "병렬처리 X", "병렬처리 O", "개선 사항"],
            rows: [
              ["평균 렌더링 속도", "0.2s", "0.1s", "렌더링 속도 50% 향상"],
            ],
            highlightColumns: [2],
          },
          {
            title: "Persist 호출 최적화 성과",
            headers: [
              "5번 방문 기준",
              "Persist 호출 최적화 X",
              "Persist 호출 최적화 O",
              "개선 사항",
            ],
            rows: [
              ["API 호출 횟수", "5회", "1회", "-4회 (80% 감소)"],
              ["평균 렌더링 속도", "2s", "1.4s", "렌더링 속도 30% 향상"],
            ],
            highlightColumns: [2],
          },
        ],
      },
      {
        title: "리스트 페이지 로딩 속도 개선",
        items: [
          "가상화로 현재 화면에 보이는 항목만 렌더링해 DOM 노드 수를 줄이고, 사용하지 않는 데이터는 자동 해제되도록 구성했습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "useInfiniteQuery로 페이지 단위 데이터를 점진적으로 호출했지만, 모든 데이터가 DOM에 누적 렌더링되면서 스크롤 성능 저하가 발생했습니다.",
            solutions: [
              "react-virtualized의 List 컴포넌트를 적용하여 화면에 보이는 항목만 렌더링하도록 개선했습니다.",
              "CellMeasurer를 사용해 이미지 포함 항목의 동적 높이를 계산하고 일관된 스크롤 경험을 보장했습니다.",
            ],
          },
        ],
        table: {
          headers: [
            "1분간 무한 스크롤",
            "react virtualized 적용 X",
            "react virtualized 적용 O",
            "개선 사항",
          ],
          rows: [
            ["평균 렌더링 속도", "1.5s", "0.6s", "렌더링 속도 60% 향상"],
            ["API 호출 횟수", "111회", "130회", "+19회 (호출 효율성 감소)"],
            ["뷰 포트 누적 노드 수", "444개", "5개", "-439개 (95% 감소)"],
          ],
          highlightColumns: [2],
        },
      },
      {
        title: "낙관적 업데이트로 API 호출 최적화",
        items: [
          "마지막 상태 값만 API로 반영하도록 최적화하여 서버 부하를 크게 줄였습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "좋아요 버튼을 누를 때마다 API가 호출되어 서버에 부하를 줄 수 있는 문제가 있었습니다. 악의적인 사용자가 계속 호출할 경우 20초 동안 166회 API 요청이 발생할 수 있었습니다.",
            solutions: [
              "디바운스 함수를 활용해 좋아요 버튼의 마지막 상태 값만 API 호출하도록 최적화했습니다.",
              "기존과 동일한 상태인 경우 API를 호출하지 않도록 처리했습니다.",
            ],
          },
        ],
        table: {
          headers: [
            "20초 호출 횟수",
            "Debounce 적용 X",
            "Debounce 적용 O",
            "개선 사항",
          ],
          rows: [["API 호출 횟수", "166회", "1회", "-165회 (99.4% 감소)"]],
          highlightColumns: [2],
        },
      },
    ],
    tags: ["React", "Zustand", "Performance"],
  },
  {
    id: "04",
    title: "뚜두뚜두",
    period: "2024.06 - 2024.09",
    description: "목표를 설정하고 성취하며 계획을 관리하는 투두 서비스",
    image: "/images/thumbnail/ddududdudu_thumbnail.svg",
    links: {
      site: "https://ddudu.vercel.app",
      siteLabel: "프로젝트",
      siteDetailLabel: "프로젝트",
      github: "https://github.com/DDu-Du-DDu-Du/DDuDu_Front",
      githubLabel: "저장소",
    },
    achievements: [
      "Zustand persist를 활용하여 입력 폼 이탈 시 데이터 소실을 방지하는 임시저장 기능 구현",
      "페이지 이탈 및 새로고침 시 임시 저장 데이터를 불러올지 선택할 수 있는 사용자 복구 플로우 구현",
      "Next.js의 ISR, SSG 방식을 적용하여 초기 렌더링 속도 개선 및 데이터 패칭 부하 감소",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "목표를 설정하고 성취하며 계획을 관리하는 투두 서비스입니다.",
          "사용자가 목표와 할 일을 작성하고 관리하는 과정에서 입력 데이터 안정성과 페이지 응답 속도를 개선하는 데 집중했습니다.",
        ],
      },
      {
        title: "입력 폼 임시 저장 기능 구현",
        items: [
          "사용자의 데이터 소실을 방지하여 입력 폼의 신뢰성을 높이고, 작성 흐름이 끊기지 않는 사용자 경험을 제공했습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "사용자가 입력 폼 작성 중 페이지를 이탈하거나 새로고침하면 기존에 작성한 데이터가 소실되는 문제가 있었습니다.",
            solutions: [
              "Zustand의 persist 기능을 활용하여 sessionStorage에 입력 데이터를 임시 저장하는 기능을 구현했습니다.",
              "페이지 이탈 및 새로고침 시 모달을 띄워 사용자가 임시 저장된 데이터를 불러올지 선택할 수 있도록 구성했습니다.",
              "사용자가 데이터를 불러오기로 선택하면 기존 작성 데이터를 복원하고, 취소하면 sessionStorage의 임시 저장 데이터를 삭제하도록 로직을 작성했습니다.",
            ],
          },
        ],
      },
      {
        title: "ISR, SSG를 통한 데이터 부하 및 렌더링 속도 개선",
        items: [
          "ISR 및 SSG를 통해 초기 로딩 시간을 단축시켜 사용자에게 더 빠른 응답성을 제공했습니다.",
          "정적 데이터를 미리 생성해 서버의 데이터 처리 부하를 줄이고, 페이지 전환 시 더 부드러운 사용자 경험을 제공했습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "기존 SSR(Server-Side Rendering) 방식에서는 페이지 진입 시 매번 정적인 데이터를 패칭하면서 불필요한 데이터 요청과 렌더링 시간이 발생했습니다.",
            solutions: [
              "각 페이지별로 ISR(Incremental Static Regeneration) 및 SSG(Static Site Generation) 방식을 도입하여 정적인 데이터를 효율적으로 관리했습니다.",
              "필요한 데이터만 정적으로 생성하고, 페이지 요청 시 실시간으로 반복 패칭하지 않도록 설정했습니다.",
            ],
          },
        ],
        table: {
          headers: ["개선 항목", "SSR 적용", "ISR 적용 (12시간)", "SSG 적용"],
          rows: [["평균 렌더링 속도", "275ms", "186ms", "179ms"]],
          highlightColumns: [2, 3],
        },
      },
    ],
    tags: ["Next.js", "Zustand", "SSR/ISR/SSG"],
  },
  {
    id: "05",
    title: "SEUNGHYEON DEV",
    period: "2025.02 - 2025.03",
    description:
      "지식을 공유하고 기록하기 위해 만든 기술 블로그이자 포트폴리오 웹사이트",
    image: "/images/thumbnail/seunghyeon-dev_thumbnail.svg",
    links: {
      site: "https://seunghyeon.dev",
      siteLabel: "프로젝트",
      siteDetailLabel: "프로젝트",
      github: "https://github.com/SeungHyune/rekoding-blog",
      githubLabel: "저장소",
    },
    achievements: [
      "React Router Loader와 동적 임포트(코드 스플리팅)를 적용해 초기 로딩 시간 33% 향상 및 번들 크기 9MB에서 1.5MB로 최적화",
      "컴포넌트 렌더링 전 데이터 Pre-fetching으로 첫 페이지 접근 시 빈 화면 노출 문제 개선",
      "react-image-file-resizer 기반 webp 변환으로 이미지 크기를 1.84MB에서 60.22KB로 약 96.7% 최적화",
      "서브셋 다이나믹 폰트 적용으로 폰트 크기를 약 8MB에서 476KB로 약 94% 최적화",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "지식을 공유하고 기록하기 위해 만든 기술 블로그입니다.",
          "블로그 콘텐츠를 안정적으로 보여주는 것뿐 아니라, 초기 로딩 속도와 번들 크기, 이미지·폰트 리소스 최적화까지 함께 개선했습니다.",
        ],
      },
      {
        title: "Loader와 코드 스플리팅을 통한 로딩 시간 및 번들 크기 개선",
        items: [],
        problemSolutions: [
          {
            problem:
              "React의 기본 동작으로 모든 페이지 컴포넌트가 초기 번들에 포함되어, 첫 접속 시 불필요한 코드까지 함께 로드되는 문제가 있었습니다.",
            solutions: [
              "React.lazy를 활용한 페이지 단위 동적 임포트를 구현했습니다.",
              "코드 스플리팅을 적용하여 사용자가 접근한 페이지에 필요한 코드만 로드되도록 번들 크기를 최적화했습니다.",
            ],
          },
          {
            problem:
              "페이지 접근 시 컴포넌트 로드와 데이터 패칭이 동시에 발생하여, 데이터 준비가 완료되기 전까지 사용자에게 빈 화면이 노출되는 문제가 있었습니다.",
            solutions: [
              "React Router Loader 기능을 활용해 컴포넌트 렌더링 전에 데이터를 미리 패칭하도록 구성했습니다.",
              "데이터를 Pre-fetching하여 페이지 접근 시 완성된 화면이 바로 보일 수 있도록 구현했습니다.",
            ],
          },
        ],
        table: {
          headers: [
            "개선 항목",
            "Loader, 스플리팅 적용 X",
            "Loader, 스플리팅 적용 O",
            "개선 사항",
          ],
          rows: [
            ["초기 렌더링 속도", "1.5s", "1s", "초기 렌더링 33% 향상"],
            ["번들 크기", "9MB", "1.5MB", "번들 크기 83% 향상"],
          ],
          highlightColumns: [2],
        },
      },
      {
        title: "이미지 압축과 폰트 최적화로 LCP 성능 향상",
        items: [
          "이미지와 폰트 리소스 최적화를 통해 LCP 성능을 향상시키고, 사용자 경험과 SEO에 긍정적인 영향을 줄 수 있도록 개선했습니다.",
        ],
        problemSolutions: [
          {
            problem:
              "사용자가 이미지와 폰트 로딩 시간이 길어지는 문제를 경험했습니다.",
            solutions: [
              "저장된 이미지를 사용하는 화면에서 더 빠르게 로드될 수 있도록 이미지 크기 최적화 로직을 적용했습니다.",
              "기존 ttf 폰트 로딩 방식을 CDN 기반 서브셋 다이나믹 폰트로 변경하여 실제 사용하는 폰트만 불러오도록 설정했습니다.",
            ],
          },
          {
            problem:
              "Firebase 저장소에 업로드되는 이미지 파일 용량이 커서 저장소 용량 낭비와 불필요한 비용이 발생할 수 있었습니다.",
            solutions: [
              "react-image-file-resizer 라이브러리를 활용해 업로드 이미지를 webp 형식으로 압축·변환했습니다.",
              "압축된 이미지를 Firebase 저장소에 업로드하여 저장소 용량을 최적화했습니다.",
            ],
          },
        ],
        table: {
          headers: ["개선 항목", "개선 전", "개선 후", "개선 사항"],
          rows: [
            ["이미지 크기", "1.84MB", "60.22KB", "약 96.7% 향상"],
            ["폰트 크기", "약 8MB", "476KB", "약 94% 향상"],
          ],
          highlightColumns: [2],
        },
      },
    ],
    tags: ["React", "Optimization", "Firebase"],
  },
];
