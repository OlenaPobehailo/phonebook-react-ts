import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
