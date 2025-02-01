import { Outlet } from "react-router-dom";
import { Header } from "@/components";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main id="app">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
