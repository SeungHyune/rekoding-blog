type PortfolioProject = {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  links: {
    site: string;
    github: string;
    article?: string;
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
    title: "IvyFin",
    period: "2026.01 - 2026.04",
    description:
      "보험 보장분석 상담 신청 고객의 사전 접수, 건강 데이터 기반 상담, 맞춤형 상품 추천까지 자동화한 End-to-End AI 보험 상담 플랫폼",
    image: "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=IvyFin",
    links: {
      site: "https://ivyfinsult.clevics.co.kr",
      github: "",
    },
    achievements: [
      "Gemini Live와 Socket.IO 기반 실시간 웹소켓 파이프라인으로 본인 확인부터 상담 예약까지 자동화",
      "백엔드 In-Memory(Map) 대화 이력과 마지막 AI 응답 상태를 활용한 무중단 세션 재연결 로직 구현",
      "30자리 Access Key와 2분 TTL 기반 외부 제휴사 비회원 인증 및 Redirect 진입 플로우 구축",
      "Qdrant(Vector DB) 기반 보험 약관 RAG 추천 파이프라인과 관리자 업로드 기반 지식베이스 갱신 구조 구현",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "보험 보장분석 상담 신청 고객을 대상으로 1차 상담 접수, 건강 데이터 기반 심층 상담, 맞춤형 상품 추천까지 연결한 AI 상담 플랫폼입니다.",
          "상담사가 직접 수행하던 접수 과정을 AI 음성·채팅 상담으로 자동화하고, 수집된 고객 정보와 건강검진 데이터를 RAG 상품 추천 파이프라인에 연동했습니다.",
        ],
      },
      {
        title: "실시간 상담 자동화",
        items: [
          "Gemini Live API와 Socket.IO를 연결해 음성 입력, AI 응답, 상담 단계 전환, 예약 완료 처리를 실시간으로 동기화했습니다.",
          "LLM Tool Calling을 활용해 고객 정보 기록, 필수 정보 검증, 상담 상태 전환을 백엔드에서 엄격하게 관리했습니다.",
          "필수 정보 누락, 중복 단계 전환, 조기 예약 완료 같은 대화 중 이상 흐름을 서버 검증 로직으로 방지했습니다.",
        ],
      },
      {
        title: "세션 복구와 보안 진입",
        items: [
          "네트워크 단절 시 conversationHistory와 마지막 AI 응답 상태를 기반으로 상담 맥락을 복원하는 재연결 로직을 구현했습니다.",
          "외부 제휴사 고객 유입을 위해 동적 상담 세션을 생성하고, 30자리 Access Key와 2분 TTL을 적용한 비회원 인증 인프라를 구축했습니다.",
          "제휴사 원본 데이터는 보존하면서 AI 상담에서 갱신 가능한 활성 필드를 분리해 데이터 추적성과 운영 안정성을 확보했습니다.",
        ],
      },
      {
        title: "RAG 추천 파이프라인",
        items: [
          "고객의 나이, 성별, 관심 보장 조건으로 1차 필터링한 뒤 Qdrant 시맨틱 검색으로 상담 맥락에 맞는 보험 상품 약관을 조회했습니다.",
          "관리자 대시보드의 문서 업로드 기반 지식베이스 갱신 구조를 통해 코드 배포 없이 최신 보험 상품 정보를 추천 결과에 반영할 수 있게 했습니다.",
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
      "AI 솔루션 기업 Clevi의 공식 홈페이지를 기획·디자인·프론트엔드·백엔드까지 단독 개발하고, 비개발자 운영을 위한 관리자 CMS를 구축한 프로젝트",
    image:
      "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=Clevi+Homepage",
    links: {
      site: "https://clevi.ai",
      github: "",
      article:
        "https://velog.io/@rekoding/%EB%B9%84%EC%A0%84%EA%B3%B5-%EC%8B%A0%EC%9E%85-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EB%8F%84%EC%A0%84%EA%B8%B0-%ED%9A%8C%EC%82%AC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EB%8B%A4",
    },
    achievements: [
      "Next.js 기반 홈페이지 전체를 단독 기획·디자인·개발하고 Node.js 백엔드와 연동",
      "Tiptap WYSIWYG 에디터와 Supabase Storage를 연동한 기술자료·뉴스 콘텐츠 관리자 CMS 구축",
      "next-intl 기반 한국어·영어 다국어 라우팅 구조와 SEO 대응 구조 설계",
      "JWT 관리자 인증, refresh token 갱신, LLM API Key 보호를 위한 백엔드 프록시 구조 구현",
    ],
    detailSections: [
      {
        title: "프로젝트 개요",
        items: [
          "AI 챗봇, 멀티모달 LLM, 에이전트, 온프레미스·온디바이스 AI 솔루션을 제공하는 Clevi의 공식 홈페이지입니다.",
          "소개 페이지에 그치지 않고 기술자료·뉴스 콘텐츠를 비개발자가 직접 운영할 수 있도록 관리자 CMS까지 함께 구축했습니다.",
        ],
      },
      {
        title: "관리자 CMS",
        items: [
          "Tiptap 기반 WYSIWYG 에디터를 도입해 기술자료와 뉴스 콘텐츠를 관리자 화면에서 직접 등록·수정할 수 있게 했습니다.",
          "Supabase Storage 이미지 업로드를 연동해 본문 이미지 교체와 공개 URL 반영까지 CMS 흐름 안에서 처리했습니다.",
          "콘텐츠 운영 방식을 '개발자 코드 배포 후 반영'에서 '관리자 직접 수정 후 즉시 반영'으로 전환했습니다.",
        ],
      },
      {
        title: "다국어와 콘텐츠 구조",
        items: [
          "next-intl 기반 라우팅을 설계해 한국어·영어 콘텐츠를 확장 가능한 구조로 분리했습니다.",
          "CMS API에서 locale별 title, content, excerpt 필드를 분리해 같은 콘텐츠의 다국어 버전을 안정적으로 관리했습니다.",
          "스토리 슬롯 관리 기능을 통해 메인 페이지 노출 콘텐츠를 관리자에서 교체할 수 있게 구성했습니다.",
        ],
      },
      {
        title: "인증과 프록시",
        items: [
          "JWT 기반 관리자 로그인과 refresh token 갱신 플로우를 구현해 관리자 세션을 안정적으로 유지했습니다.",
          "Next.js API Route 프록시를 통해 백엔드 API와 LLM API Key를 클라이언트에 직접 노출하지 않는 구조를 설계했습니다.",
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
    image: "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=MasilGasil",
    links: {
      site: "https://www.masilgasil.app",
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
    image: "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=DDuDu",
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
    title: "Rekoding Blog",
    period: "2025.02 - 2025.03",
    description: "지식을 공유하고 기록하기 위해 직접 개발한 기술 블로그",
    image:
      "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=Rekoding+Blog",
    links: {
      site: "https://www.rekoding.site",
      github: "https://github.com/SeungHyune/rekoding-blog",
    },
    achievements: [
      "React Router Loader와 동적 임포트(코드 스플리팅)를 적용해 초기 로딩 시간 33% 향상 및 번들 크기 9MB에서 1.5MB로 최적화",
      "react-image-file-resizer로 webp 이미지 변환을 도입, Firebase 스토리지 용량을 96.7% 최적화",
    ],
    tags: ["React", "Optimization", "Firebase"],
  },
];
