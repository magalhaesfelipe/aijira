import { Outlet } from "react-router-dom";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import s from "./layout.module.css";

const Layout = () => {
  return (
    <div className={s.sc}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
