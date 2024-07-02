import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation";
import { Wrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default Layout;
