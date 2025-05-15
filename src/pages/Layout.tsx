import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <section className="min-h-screen bg-bgColor">
      <NavBar />
      <Outlet />
      <ScrollToTop />
    </section>
  );
};

export default Layout;
