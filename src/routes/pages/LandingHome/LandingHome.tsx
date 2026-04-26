import {
  HeroSection,
  ProfileSummary,
  PortfolioSummary,
  BlogSummary,
} from "./components";
import styles from "./landingHome.module.css";

const LandingHome = () => {
  return (
    <div className={styles.landingHomeContainer}>
      <HeroSection />
      <ProfileSummary />
      <PortfolioSummary />
      <BlogSummary />
    </div>
  );
};

export default LandingHome;
