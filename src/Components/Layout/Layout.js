import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;