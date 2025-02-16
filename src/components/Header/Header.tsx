import { Link, NavLink } from "react-router-dom";
import {
  GithubIcon,
  EmailIcon,
  EmailDarkIcon,
  GithubDarkIcon,
} from "@/components/icons";
import { SwitchButton, SearchBar } from "./components";
import styles from "./header.module.css";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import useLogin from "@/stores/useLogin/useLogin";

const Header = () => {
  const { isLogin } = useLogin();
  const { theme } = useThemeStore();
  return (
    <header
      className={`${styles.header} ${theme === "DARK" ? "dark" : "light"}`}
    >
      <section className={styles.headerContainer}>
        <article className={styles.headerNavigation}>
          <Link className={styles.logo} to="/" title="Logo">
            <div className={styles.imgBox}>
              <img src="/logo.png" alt="블로그 로고 이미지" />
            </div>
            <div className={styles.textBox}>
              <span>REKODING</span>
              <span>DEV</span>
            </div>
          </Link>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {isLogin && (
                <>
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/editor">Editor</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </article>
        <article className={styles.headerInfo}>
          <ul className={styles.infoList}>
            <li>
              <Link to="https://github.com/SeungHyune" target="_blank">
                {theme === "DARK" ? <GithubDarkIcon /> : <GithubIcon />}
              </Link>
            </li>
            <li>
              <Link to="mailto:tmdgus7820@naver.com">
                {theme === "DARK" ? <EmailDarkIcon /> : <EmailIcon />}
              </Link>
            </li>
          </ul>
          <SwitchButton />
          <SearchBar />
        </article>
      </section>
    </header>
  );
};

export default Header;
