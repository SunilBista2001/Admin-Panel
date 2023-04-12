import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/Sidebar";
import ProtectedRoutes from "./ProtectedRoutes";

function AdminLayout() {
  return (
    // <ProtectedRoutes>
    // </ProtectedRoutes>
    <section className="body">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content-body mt-4 w-full ">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AdminLayout;
