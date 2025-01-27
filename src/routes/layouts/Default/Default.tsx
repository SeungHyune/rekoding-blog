import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../../components/common";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
