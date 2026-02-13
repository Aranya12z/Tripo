import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { logout, user } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px" }}>
        <h3>Sidebar</h3>
      </aside>

      <div style={{ flex: 1 }}>
        <header>
          <span>{user?.email}</span>
          <button onClick={logout}>Logout</button>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
