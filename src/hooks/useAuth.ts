import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  login,
  getUserDetails,
  type LoginPayload,
} from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { tokenService } from "../services/tokenServices";

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: async (response) => {
      const { token } = response;
      if (token) {
        // 1. Lưu token vào localStorage
        tokenService.set(token);

        // 2. Gọi API lấy user info
        const user = await getUserDetails();

        // 3. Lưu user vào cache
        queryClient.setQueryData(["user"], user);

        // 4. Cũng lưu user vào localStorage nếu bạn hiển thị trong Header
        localStorage.setItem("user", JSON.stringify(user));

        // 5. Điều hướng về trang chủ
        navigate("/");
      } else {
        alert("Đăng nhập không có token.");
      }
    },
    onError: (err: any) => {
      alert("Đăng nhập thất bại: " + err?.message || "Có lỗi xảy ra");
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
    error: loginMutation.error,
  };
};
