import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1>E-Learning</h1>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
