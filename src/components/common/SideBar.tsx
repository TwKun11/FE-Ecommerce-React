import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCategories,
  type Category,
} from "../../services/categoryService";

interface SidebarProps {
  onFilterChange: (selectedCategoryIds: number[]) => void;
}

export default function Sidebar({ onFilterChange }: SidebarProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 5 * 60 * 1000,
  });

  const toggleCheckbox = (id: number) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];

    setSelectedIds(updated);
    onFilterChange(updated);
  };

  if (isLoading) return <div className="p-4">Đang tải danh mục...</div>;
  if (error) return <div className="p-4 text-red-600">Lỗi tải danh mục</div>;

  return (
    <aside className="w-64 border-r p-4">
      <h2 className="font-bold text-lg mb-4">Danh mục</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedIds.includes(cat.id)}
                onChange={() => toggleCheckbox(cat.id)}
              />
              <span>{cat.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
