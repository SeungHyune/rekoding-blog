import { Link, NavLink } from "react-router-dom";
import {
  GithubIcon,
  EmailIcon,
  EmailDarkIcon,
  GithubDarkIcon,
  NavMenuIcon,
  NavMenuCloseIcon,
} from "@/components/icons";
import { SwitchButton, SearchBar } from "./components";
import styles from "./header.module.css";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import { useEffect } from "react";
import { useToggle } from "@/hooks";

const Header = () => {
  const { theme } = useThemeStore();

  const {
    isToggle: isNavToggle,
    handleToggleClose: handleNavToggleOff,
    handleToggle: handleNavToggle,
  } = useToggle({ isDefaultToggleValue: true });

  useEffect(() => {
    if (window.innerWidth <= 940) {
      handleNavToggleOff();
    }
  }, []);

  const handleNavShowToggle = () => {
    handleNavToggle();
  };

  return (
    <header
      className={`${styles.header} ${theme === "DARK" ? "dark" : "light"}`}
    >
      <section className={styles.headerContainer}>
        <Link className={styles.logo} to="/" title="Logo">
          <div className={styles.imgBox}>
            <img src="/logo.png" alt="블로그 로고 이미지" />
          </div>
          <div className={styles.textBox}>
            <span>REKODING</span>
            <span>DEV</span>
          </div>
        </Link>

        <article className={styles.headerInfoContainer}>
          {isNavToggle && (
            <article className={`${styles.headerNavigation} headerNavigation`}>
              <nav className={`${styles.navigation} navigation`}>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </nav>

              <ul className={`${styles.infoList} infoList`}>
                <li>
                  <Link to="https://github.com/SeungHyune" target="_blank">
                    {theme === "DARK" ? <GithubDarkIcon /> : <GithubIcon />}
                    <span>Github</span>
                  </Link>
                </li>
                <li>
                  <Link to="mailto:tmdgus7820@naver.com">
                    {theme === "DARK" ? <EmailDarkIcon /> : <EmailIcon />}
                    <span>Email</span>
                  </Link>
                </li>
              </ul>
            </article>
          )}
          <article className={styles.headerInfo}>
            <div className={styles.switchButton}>
              <SwitchButton />
            </div>
            <div className={styles.searchBar}>
              <SearchBar />
            </div>
          </article>
        </article>

        <button
          className={`${styles.navMenuBtn} navMenuBtn`}
          type="button"
          onClick={handleNavShowToggle}
        >
          {isNavToggle ? "닫기" : "메뉴"}
          {isNavToggle ? <NavMenuCloseIcon /> : <NavMenuIcon />}
        </button>
      </section>
    </header>
  );
};

export default Header;
