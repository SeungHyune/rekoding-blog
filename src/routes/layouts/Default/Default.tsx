import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import "@/styles/theme.css";

const DefaultLayout = () => {
  const { theme } = useThemeStore();

  return (
    <section className={`rootSection ${theme === "LIGHT" ? "light" : "dark"}`}>
      <Header />
      <main id="app">
        <Outlet />
      </main>
    </section>
  );
};

export default DefaultLayout;
