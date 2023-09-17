import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute, PublicRoute, SharedLayout } from "./index";
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RedirectGooglePage = lazy(() => import("../pages/RedirectGooglePage/RedirectGooglePage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/google-redirect" element={<RedirectGooglePage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
