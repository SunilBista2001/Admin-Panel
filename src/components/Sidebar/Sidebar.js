import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import PagesIcon from "@mui/icons-material/Pages";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import StarsIcon from "@mui/icons-material/Stars";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import SidebarTitle from "./SidebarTitle";
import GiteIcon from "@mui/icons-material/Gite";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
  };

  return (
    <div
      className={showSidebar ? "inner-wrapper w-[15%]" : "inner-wrapper w-0"}
    >
      <aside id="sidebar-left" className="sidebar-left">
        <div className="sidebar-header">
          <div className="sidebar-title">Khursani Admin Panel</div>
          <div
            className="sidebar-toggle d-none d-md-block"
            data-toggle-className="sidebar-left-collapsed"
            data-target="html"
            data-fire-event="sidebar-left-toggle"
          >
            <button onClick={() => setShowSidebar(!showSidebar)}>
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </button>
          </div>
        </div>

        {/* Sidebar Title */}

        <div className="nano">
          <div className="nano-content flex flex-col justify-between">
            <nav id="menu" className="nav-main" role="navigation">
              <Link to="/">
                <SidebarTitle Icon={DashboardIcon} title="Dashboard" />
              </Link>
              <Link to="/user">
                <SidebarTitle Icon={GroupIcon} title="Users" />
              </Link>
              <Link to="/categories">
                <SidebarTitle Icon={CategoryIcon} title="Categories" />
              </Link>
              <Link to="/pages">
                <SidebarTitle Icon={PagesIcon} title="Pages" />
              </Link>
              <Link to="/wallet">
                <SidebarTitle Icon={AccountBalanceWalletIcon} title="Wallet" />
              </Link>
              <Link to="/questions">
                <SidebarTitle Icon={QuestionMarkIcon} title="Questions" />
              </Link>
              <Link to="/hostel">
                <SidebarTitle Icon={GiteIcon} title="Hostel" />
              </Link>
              <Link to="/payment">
                <SidebarTitle Icon={PaymentIcon} title="Payment Method" />
              </Link>
              <Link to="/wallet-transaction">
                <SidebarTitle
                  Icon={AccountBalanceIcon}
                  title="Wallet Transaction"
                />
              </Link>
              <Link to="/reward-transaction">
                <SidebarTitle Icon={StarsIcon} title="Reward Transaction" />
              </Link>
            </nav>

            <hr className="separator" />

            <div className="sidebar-widget ">
              <h6 className="tracking-widest ">HELP</h6>

              <div className="widget-content ml-[-23px]">
                <Link to="/settings">
                  <SidebarTitle Icon={SettingsIcon} title="Settings" />
                </Link>
                <Link to="/login" onClick={handleLogout}>
                  <SidebarTitle Icon={LogoutIcon} title="Log Out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
