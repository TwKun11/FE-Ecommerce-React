// services/categoryService.ts
import axios from "../api/axios";

export type Category = {
  id: number;
  name: string;
};

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const params = { page: 1, limit: 5 };
    const { data } = await axios.get("/categories", { params });

    if (!Array.isArray(data)) {
      throw new Error("Dữ liệu danh mục không hợp lệ");
    }

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    throw error;
  }
};
