// src/layouts/DefaultLayout.tsx
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import type { ReactNode } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
