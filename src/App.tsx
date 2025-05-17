import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayouts/DefaultLayouts";
import type { RouteConfig } from "./interface/RouteConfig";
import { Suspense, type ReactNode } from "react";
import Loader from "./components/common/Loader/Loader";
const FragmentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            {publicRoutes.map(
              ({ path, components: Page, layout }: RouteConfig, index) => {
                const Layout =
                  layout === null ? FragmentWrapper : layout || DefaultLayout;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
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
