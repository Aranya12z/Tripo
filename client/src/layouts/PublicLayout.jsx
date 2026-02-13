import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <header>Public Navbar</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
