// src/pages/Home.tsx
import { useState } from "react";
import Sidebar from "../../components/common/SideBar/SideBar";

const Home = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleFilterChange = (selectedCategoryIds: number[]) => {
    setSelectedIds(selectedCategoryIds);
    console.log("Selected category IDs:", selectedCategoryIds);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onFilterChange={handleFilterChange} />
      <main className="flex-1 p-4">
        <h1>Home Page</h1>
        {selectedIds.length > 0 && (
          <p>Selected Categories: {selectedIds.join(", ")}</p>
        )}
      </main>
    </div>
  );
};

export default Home;
