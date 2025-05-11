import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <section className="min-h-screen bg-bgColor pb-10">
      <NavBar />
      <Outlet />
    </section>
  );
};

export default Layout;
