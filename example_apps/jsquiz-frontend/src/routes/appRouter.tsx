// React Router V6
import { Route, Routes } from "react-router-dom";

import { Start, Game, Results } from '../pages'
// import ErrorPage from "../pages/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<Start />} />
      <Route path={"/home"} element={<Start />} />
      <Route path={"/quiz"} element={<Game />} />
      <Route path={"/result"} element={<Results />} />
      {/* <Route key={"/form"} path={"/form"} element={route.element} /> */}
      {/* <Route key={"/top"} path={"/top"} element={route.element} /> */}
      {/* <Route path="/*" element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default AppRouter;