import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Main, MainOrder } from "./style";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";

function PageWrapper() {
  const { pathname } = useLocation();
  return pathname === AppRoute.ORDER ? (
    <>
      <Header />
      <MainOrder>
        <Outlet />
      </MainOrder>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
