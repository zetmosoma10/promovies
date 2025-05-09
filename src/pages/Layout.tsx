import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <section className="min-h-screen bg-bgColor">
      <NavBar />
      <div className="max-container">
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
