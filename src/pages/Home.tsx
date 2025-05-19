import React, { useState, useCallback } from "react";
import Sidebar from "../components/common/SideBar";

const Home = () => {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

  const handleFilterChange = useCallback((ids: number[]) => {
    setSelectedCategoryIds(ids);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar onFilterChange={handleFilterChange} />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        {selectedCategoryIds.length > 0 && (
          <p className="text-gray-600">
            Selected Categories: {selectedCategoryIds.join(", ")}
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
