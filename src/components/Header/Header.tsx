import { Link, NavLink } from "react-router-dom";
import { GithubIcon, EmailIcon } from "@/components/icons";
import { SwitchButton, SearchBar } from "./components";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerContainer}>
        <article className={styles.headerNavigation}>
          <Link className={styles.logo} to="/" title="Logo">
            <span>REKODING</span>
            <span>DEV</span>
          </Link>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </nav>
        </article>
        <article className={styles.headerInfo}>
          <ul className={styles.infoList}>
            <li>
              <Link to="https://github.com/SeungHyune" target="_blank">
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link to="mailto:tmdgus7820@naver.com">
                <EmailIcon />
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
