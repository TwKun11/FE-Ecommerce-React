import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { getAllRoles, type Role } from "../services/roleServices";

type LoginForm = {
  phone_number: string;
  password: string;
  role_id: string;
};

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    getAllRoles().then(setRoles).catch(console.error);
  }, []);

  const onSubmit = (data: LoginForm) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full overflow-hidden flex">
        <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Chào mừng!</h2>
          <p className="mb-6">Tạo tài khoản mới và khám phá ngay hôm nay</p>
          <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            SIGN UP
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 p-8 space-y-5"
          noValidate
        >
          <h2 className="text-2xl font-semibold text-gray-700">Đăng nhập</h2>

          <input
            type="tel"
            placeholder="Số điện thoại"
            {...register("phone_number", {
              required: "Không được để trống",
            })}
            className={`w-full border px-4 py-2 rounded ${
              errors.phone_number ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm">
              {errors.phone_number.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password", {
              required: "Không được để trống",
              minLength: { value: 6, message: "Tối thiểu 6 ký tự" },
            })}
            className={`w-full border px-4 py-2 rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <select
            {...register("role_id", { required: "Vui lòng chọn vai trò" })}
            className={`w-full border px-4 py-2 rounded ${
              errors.role_id ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">-- Chọn vai trò --</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="text-red-500 text-sm">{errors.role_id.message}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
