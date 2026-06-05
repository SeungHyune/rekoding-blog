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
    article?: string;
    articleLabel?: string;
  };
  achievements: string[];
  detailSections?: {
    title: string;
    items: string[];
  }[];
  tags: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "01",
    title: "IvyFin AI 보험 상담 플랫폼",
    period: "2026.01 - 2026.04",
    description:
      "보험 보장분석 상담 신청 고객을 대상으로 1차 상담 접수부터 건강 데이터 기반 상담, 맞춤형 상품 추천까지 이어지는 End-to-End AI 플랫폼",
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
      article:
        "https://velog.io/@rekoding/AI-%EC%9D%8C%EC%84%B1-%EC%83%81%EB%8B%B4%EB%B6%80%ED%84%B0-RAG-%EC%83%81%ED%92%88-%EC%B6%94%EC%B2%9C%EA%B9%8C%EC%A7%80-IvyFin-%ED%92%80%EC%8A%A4%ED%83%9D-%EA%B0%9C%EB%B0%9C-%ED%9A%8C%EA%B3%A0",
      articleLabel:
        "AI 음성 상담부터 RAG 상품 추천까지: IvyFin 풀스택 개발 회고",
    },
    achievements: [
      "Gemini Live와 Socket.IO 기반 실시간 웹소켓 파이프라인으로 본인 확인부터 상담 예약까지 자동화",
      "conversationHistory와 마지막 AI 응답 상태를 기반으로 네트워크 단절 후 상담 맥락을 복원하는 세션 재연결 로직 구현",
      "LLM Tool Calling 기반 상담 상태 관리와 서버 측 검증 플로우로 정보 누락·중복 단계 전환·조기 예약 완료 방지",
      "30자리 Access Key와 2분 TTL 기반 외부 제휴사 비회원 인증 및 Redirect 진입 플로우 구축",
      "Qdrant(Vector DB) 기반 보험 상품 RAG 추천 파이프라인과 관리자 업로드 기반 지식베이스 갱신 구조 구현",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "보험 보장분석 상담 신청 고객을 대상으로 1차 상담 접수, 건강 데이터 기반 심층 상담, 맞춤형 상품 추천까지 연결한 AI 상담 플랫폼입니다.",
          "상담사가 직접 수행하던 접수 과정을 AI 음성·채팅으로 자동화하고, 고객 정보와 건강검진 데이터를 기반으로 RAG 상품 추천 파이프라인을 유기적으로 연결했습니다.",
          "[1차] AI 사전 접수 서비스: https://ivyfinsult-gai.clevics.co.kr",
          "[2차] AI 심층 상담 서비스: https://ivyfinsult.clevics.co.kr",
        ],
      },
      {
        title: "Gemini Live / Socket.IO 실시간 상담 자동화",
        items: [
          "Gemini Live와 Socket.IO 기반 실시간 웹소켓 파이프라인을 구축하여 본인 확인부터 심사 필수 정보 수집, 상담 예약까지의 전 과정을 자동화했습니다.",
          "24시간 공휴일·야간 무중단 상담 응대가 가능하도록 AI 상담 흐름과 예약 프로세스를 연결했습니다.",
          "네트워크 단절 시 백엔드 In-Memory(Map 객체)의 conversationHistory와 마지막 AI 응답 상태를 기반으로 상담 맥락을 복원하는 무중단 세션 재연결 로직을 구현했습니다.",
        ],
      },
      {
        title: "LLM Tool Calling 기반 상담 상태 관리",
        items: [
          "LLM의 Tool Call을 활용해 AI 응답 생성과 동시에 고객 정보 기록, 상담 단계 전환, 예약 완료 처리가 백엔드와 실시간으로 동기화되도록 구현했습니다.",
          "필수 정보 누락, 중복 단계 전환, 조기 예약 완료 등 실시간 대화 중 발생할 수 있는 이상 행동을 방지하기 위해 서버 측 검증 아키텍처를 추가했습니다.",
        ],
      },
      {
        title: "Authentication / TTL 보안 진입 플로우",
        items: [
          "외부 제휴사 고객 정보를 기반으로 동적 상담 세션을 생성했습니다.",
          "30자리 Access Key와 2분 TTL(단기 만료), Redirect URL 구조를 설계하여 별도 회원가입 없이 안전하게 상담에 진입할 수 있는 비회원 인증 인프라를 구축했습니다.",
        ],
      },
      {
        title: "Qdrant / Vector DB RAG 추천 파이프라인",
        items: [
          "고객의 나이, 성별, 관심 보장 조건으로 1차 필터링을 거친 후 Qdrant(Vector DB)의 시맨틱 검색을 통해 상담 맥락에 부합하는 보험 상품 약관 데이터를 찾아 AI 추천 로직에 연동했습니다.",
          "관리자 대시보드를 통한 업로드 기반 지식베이스 갱신 구조를 구축하여 최신 보험 상품 정보를 실시간 추천 결과에 즉시 반영할 수 있도록 운영 프로세스를 개선했습니다.",
        ],
      },
    ],
    tags: ["NestJS", "Gemini Live", "Socket.IO", "Qdrant", "RAG"],
  },
  {
    id: "02",
    title: "Clevi 기업 홈페이지 & 관리자 CMS",
    period: "2025.07 - 2025.09",
    description:
      "AI 챗봇, 멀티모달 LLM, 에이전트, 온프레미스·온디바이스 AI 솔루션 기업 Clevi의 공식 홈페이지와 관리자 CMS를 단독 개발한 프로젝트",
    image: "/images/thumbnail/clevi_thumbnail.svg",
    links: {
      site: "https://clevi.ai",
      github: "",
      article:
        "https://velog.io/@rekoding/%EB%B9%84%EC%A0%84%EA%B3%B5-%EC%8B%A0%EC%9E%85-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EB%8F%84%EC%A0%84%EA%B8%B0-%ED%9A%8C%EC%82%AC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EB%8B%A4",
      articleLabel: "비전공 신입 개발자의 도전기: 회사 홈페이지를 직접 만들다",
    },
    achievements: [
      "Clevi 공식 홈페이지를 단독으로 기획, 디자인, 프론트엔드, 백엔드까지 개발",
      "Tiptap 기반 WYSIWYG 에디터와 Supabase Storage를 연동한 기술자료·뉴스 콘텐츠 관리자 CMS 구축",
      "콘텐츠 운영 방식을 '개발자 코드 배포 → 반영'에서 '관리자 직접 수정 → 즉시 반영' 구조로 전환",
      "next-intl 기반 한국어·영어 다국어 라우팅 구조 설계",
      "JWT 기반 관리자 인증 및 토큰 갱신 플로우, LLM API Key 보호를 위한 백엔드 프록시 구조 구현",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "AI 챗봇, 멀티모달 LLM, 에이전트, 온프레미스·온디바이스 AI 솔루션을 제공하는 Clevi의 공식 홈페이지입니다.",
          "공식 홈페이지를 단독으로 기획, 디자인, 프론트엔드, 백엔드까지 개발했습니다.",
          "소개 페이지에 그치지 않고 기술자료·뉴스 콘텐츠를 비개발자가 직접 운영할 수 있도록 관리자 CMS까지 함께 구축했습니다.",
          "프로젝트 URL: https://clevi.ai",
        ],
      },
      {
        title: "Next.js / Tiptap 콘텐츠 관리자 CMS",
        items: [
          "Tiptap 기반 WYSIWYG 에디터와 Supabase Storage를 연동한 관리자 CMS를 구축하여 비개발자가 기술자료·뉴스 콘텐츠를 직접 등록·수정·이미지 교체할 수 있는 운영 환경을 마련했습니다.",
          "콘텐츠 운영 방식을 '개발자 코드 배포 → 반영' 구조에서 '관리자 직접 수정 → 즉시 반영' 구조로 전환하여 콘텐츠 작업 시 개발자 개입을 1명에서 0명으로 단축했습니다.",
        ],
      },
      {
        title: "next-intl 글로벌 확장 다국어 라우팅",
        items: [
          "next-intl 기반 다국어 라우팅 구조를 설계하여 한국어·영어 콘텐츠 확장이 가능한 홈페이지 아키텍처를 구축했습니다.",
          "CMS API에서 locale별 title, content, excerpt 필드를 분리해 같은 콘텐츠의 다국어 버전을 관리할 수 있도록 구성했습니다.",
        ],
      },
      {
        title: "Security / JWT 인증 및 프록시",
        items: [
          "JWT 기반 관리자 인증 및 토큰 갱신 플로우를 구현했습니다.",
          "LLM API Key 보호를 위한 백엔드 프록시 구조를 설계해 클라이언트에 민감 정보가 직접 노출되지 않도록 안전성을 확보했습니다.",
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
      github:
        "https://github.com/Team-SilverTown/Team-SilverTown-MasilGasil-FE",
    },
    achievements: [
      "조건부 캐싱, Geolocation 및 병렬 처리(Promise.allSettled)로 API 호출 속도 50% 향상",
      "react-virtualized 가상화를 도입해 DOM 노드 수를 444개에서 5개로 줄여 무한스크롤 성능 최적화",
      "디바운스를 활용한 낙관적 업데이트로 '좋아요' API 서버 부하 99.4% 감소",
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
      github: "https://github.com/DDu-Du-DDu-Du/DDuDu_Front",
    },
    achievements: [
      "Zustand persist를 활용하여 입력 폼 이탈 시 데이터 소실을 방지하는 임시저장 기능 구현",
      "Next.js의 ISR, SSG 방식을 적용하여 초기 렌더링 속도 개선 및 데이터 패칭 부하 감소",
    ],
    tags: ["Next.js", "Zustand", "SSR/ISR/SSG"],
  },
  {
    id: "05",
    title: "SEUNGHYEON DEV",
    period: "2025.02 - 2025.03",
    description:
      "블로그와 포트폴리오를 함께 운영하기 위해 직접 개발한 개인 웹사이트",
    image: "/images/thumbnail/seunghyeon-dev_thumbnail.svg",
    links: {
      site: "https://seunghyeon.dev/",
      github: "https://github.com/SeungHyune/rekoding-blog",
    },
    achievements: [
      "React Router Loader와 동적 임포트(코드 스플리팅)를 적용해 초기 로딩 시간 33% 향상 및 번들 크기 9MB에서 1.5MB로 최적화",
      "react-image-file-resizer로 webp 이미지 변환을 도입, Firebase 스토리지 용량을 96.7% 최적화",
    ],
    tags: ["React", "Optimization", "Firebase"],
  },
];
