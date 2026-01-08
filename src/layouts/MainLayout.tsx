// src/layouts/MainLayout.tsx
import Header from "../shared/header";
import MainNav from "../shared/ui/layout/main-nav/mainnav";
import Footer from "../shared/footer/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <MainNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
