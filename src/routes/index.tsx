import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DEFAULT_PATH } from "shared/constants/pageRoutes";
import AppLayout from "layout/AppLayout";
import Loader from "components/Loader";
const Segment = lazy(() => import("pages/Segment"));

const routes = [
  {
    path: DEFAULT_PATH,
    element: <AppLayout />,
    auth: false,
    children: [
      {
        path: DEFAULT_PATH,
        element: <Segment />,
        auth: false,
      },
    ],
  },
];
function AllRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route: any, index: number) => {
          if (route.children) {
            return (
              <Route key={index} path={route.path} element={route.element}>
                {route.children.map((childRoute: any, childIndex: number) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            );
          } else {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
}

export default AllRoutes;
