import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main id="app">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
