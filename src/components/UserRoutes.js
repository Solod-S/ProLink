import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { setNavigate } from "../service/axios/axios";
import { useNavigate } from "react-router-dom";

import { PrivateRoute, PublicRoute, SharedLayout, Loader } from "./index";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RedirectSocialPage = lazy(() => import("../pages/RedirectSocialPage/RedirectSocialPage"));
const PasswordRestorePage = lazy(() => import("../pages/PasswordRestorePage/PasswordRestorePage"));

const UserRoutes = () => {
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/password-restore" element={<PasswordRestorePage />} />
          <Route path="/social-redirect" element={<RedirectSocialPage />} />
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
