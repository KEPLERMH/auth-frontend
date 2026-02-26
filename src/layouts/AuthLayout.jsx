import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className=" grid place-content-center min-h-screen">
      <div className=" p-8 bg-neutral-400 rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
