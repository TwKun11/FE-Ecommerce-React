import React from "react";
import type { ReactNode } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
