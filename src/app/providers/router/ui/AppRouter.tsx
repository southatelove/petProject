import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "shared";
import { routeConfig } from "shared/config/routerConfig/routeConfig";

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
}
