// services/categoryService.ts
import axios from "../api/axios";

export type Role = {
  id: number;
  name: string;
};

export const getAllRoles = async (): Promise<Role[]> => {
  try {
    const { data } = await axios.get("/roles");

    if (!Array.isArray(data)) {
      throw new Error("Khong tìm thấy dữ liệu");
    }
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy roles:", error);
    throw error;
  }
};
