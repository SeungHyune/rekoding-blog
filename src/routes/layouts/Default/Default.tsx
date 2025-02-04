import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import "@/styles/theme.css";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import styles from "./default.module.css";

const DefaultLayout = () => {
  const { theme } = useThemeStore();

  return (
    <section className={`rootSection ${theme === "LIGHT" ? "light" : "dark"}`}>
      <Header />
      <main id="app">
        <Outlet />
        <div className={styles.scrollButtons}>
          <button
            className={styles.up}
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <ArrowUpIcon />
          </button>
          <button
            className={styles.down}
            type="button"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            <ArrowDownIcon />
          </button>
        </div>
      </main>
    </section>
  );
};

export default DefaultLayout;
