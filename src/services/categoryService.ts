// src/services/categoryService.ts
import axios from ".././api/axios";

export type Category = {
  id: number;
  name: string;
};

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await axios.get("/categories?page=1&limit=5");
  return response.data;
};
