import { LogIn } from "lucide-react";
import type { RouteConfig } from "../interface/RouteConfig";
import DefaultLayout from "../layouts/DefaultLayouts";
import Home from "../pages/Home";
import Notification from "../pages/Notification";
import Order from "../pages/Order";
import Login from "../pages/Login";

export const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Trang chủ",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    name: "Đăng nhập",
    component: Login,
    layout: null, // trang login không dùng layout
  },
  {
    path: "/notification",
    name: "Thông báo",
    component: Notification,
    layout: DefaultLayout,
  },
  {
    path: "/order",
    name: "Đơn hàng",
    component: Order,
    layout: DefaultLayout,
  },
];

// // Nếu cần route bảo mật (private)
// export const privateRoutes: RouteType[] = [
//   // Ví dụ:
//   // {
//   //   path: "/profile",
//   //   name: "Trang cá nhân",
//   //   component: Profile,
//   //   layout: DefaultLayout,
//   //   private: true,
//   // },
// ];
