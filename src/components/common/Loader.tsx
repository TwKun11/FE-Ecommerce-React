import React from "react";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600"></div>
  </div>
);

export default Loader;
