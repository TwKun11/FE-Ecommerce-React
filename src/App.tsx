import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import type { RouteConfig } from "./interface/RouteConfig";
import { Suspense } from "react";
import Loader from "./components/common/Loader";
import DefaultLayout from "./layouts/DefaultLayouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            {publicRoutes.map(
              ({ path, component: Page, layout }: RouteConfig) => {
                // Nếu layout === null thì không hiệu chỉnh, dùng React.Fragment để bao bọc
                const LayoutComponent =
                  layout === null ? React.Fragment : layout || DefaultLayout;
                return (
                  <Route
                    key={path} // Sử dụng path làm khóa, đảm bảo tính duy nhất
                    path={path}
                    element={
                      <LayoutComponent>
                        <Page />
                      </LayoutComponent>
                    }
                  />
                );
              }
            )}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
