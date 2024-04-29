import React, { lazy, Suspense } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom';
// import AdminLayout from './layouts/AdminLayout';
// import SiteLayout from './layouts/SiteLayout';
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const SiteLayout = lazy(() => import('./layouts/SiteLayout'));

function App() {
  return (
    <BrowserRouter>
      {
        window.location.href.includes('admin') || window.location.href.includes('login')
          ?
          <Suspense
            fallback={<SkeletonTheme baseColor="#f5f4f4" highlightColor="#cfcece"> <p> <Skeleton count={31} /> </p> </SkeletonTheme>}>
            <AdminLayout />
          </Suspense>
          :
          <Suspense
            fallback={<SkeletonTheme baseColor="#f5f4f4" highlightColor="#cfcece"> <p> <Skeleton count={31} /> </p> </SkeletonTheme>}>
            <SiteLayout />
          </Suspense>
      }
    </ BrowserRouter>
  );
}

export default App;
