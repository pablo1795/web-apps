// React Router V6
import { Route, Routes } from "react-router-dom";

// Pages
import homeRoutes from "./homeRoutes";
import employeeRoutes from "./employeeRoutes";
import assetRoutes from "./assetRoutes";

import ErrorPage from "../pages/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      {homeRoutes.map((route) =>
        <Route key={route.path} path={route.path} element={route.element} />
      )}

      {employeeRoutes.map((route) =>
        <Route key={route.path} path={route.path} element={route.element} />
      )}

      {assetRoutes.map((route) =>
        <Route key={route.path} path={route.path} element={route.element} />
      )}

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
