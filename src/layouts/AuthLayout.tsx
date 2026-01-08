import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.css"

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <main className="auth-main">
        <Outlet />
        <p>welcome to the user login page</p>
      </main>
    </div>
  );
};

export default AuthLayout;
