import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* all routes defined in the AppLayout path element are children of this element 
      we keep them in Outlet (react router element) */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
