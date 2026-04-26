export const PORTFOLIO_PROJECTS = [
  {
    id: "01",
    title: "IvyFin",
    period: "2025.12 - 현재",
    description: "AI 기반 보험 퍼미션 상담 및 맞춤형 추천 플랫폼",
    image: "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=IvyFin",
    links: {
      site: "",
      github: "",
    },
    achievements: [
      "AI 실시간 음성/채팅 I/O 처리와 비즈니스 로직을 분리하는 '투 브레인' 아키텍처 구현",
      "웹소켓 단절 시 대화를 무중단으로 복구하는 백엔드 세션 관리 로직 구현",
      "Qdrant(Vector)와 Neo4j(Graph)를 연동한 하이브리드 RAG 추천 파이프라인 구축",
      "Docker 및 GitHub Actions를 활용한 자동화 배포 파이프라인 구축",
    ],
    tags: ["NestJS", "Gemini Live", "WebSockets", "RAG"],
  },
  {
    id: "02",
    title: "Clevi 공식 홈페이지",
    period: "2025.08 - 2025.09",
    description: "기업 홍보, 다국어 지원 및 백오피스를 포함한 공식 홈페이지",
    image:
      "https://via.placeholder.com/800x500/1e1e1e/00d2ff?text=Clevi+Homepage",
    links: {
      site: "https://clevi.ai/ko",
      github: "",
      article:
        "https://velog.io/@rekoding/%EB%B9%84%EC%A0%84%EA%B3%B5-%EC%8B%A0%EC%9E%85-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EB%8F%84%EC%A0%84%EA%B8%B0-%ED%9A%8C%EC%82%AC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EB%8B%A4",
    },
    achievements: [
      "AI 도구의 의존도를 낮추고 Next.js와 Node.js를 활용하여 프론트엔드부터 백엔드까지 1인 풀스택 개발 수행",
      "국제화(i18n) 작업을 적용하여 다국어 웹사이트 환경 구축 및 검색 엔진 최적화(SEO) 달성",
      "게시글 작성, 수정, 삭제 관리가 가능한 별도의 관리자(Admin) 페이지 구축 (https://clevi.ai/admin)",
    ],
    tags: ["Next.js", "Node.js", "i18n", "Full-Stack"],
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
