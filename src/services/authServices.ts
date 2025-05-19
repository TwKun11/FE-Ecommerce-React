import axios from "../api/axios";

export type LoginPayload = {
  phone_number: string;
  password: string;
  role_id: string;
};

export type LoginResponse = {
  message: string;
  token: string;
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await axios.post("users/login", payload);
  return data;
};
export const getUserDetails = async () => {
  const { data } = await axios.post("/users/details");
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};
