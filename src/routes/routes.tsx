import { lazy } from "react";
import type { RouteConfig } from "../interface/RouteConfig";
import Notification from "../pages/Notifications/Notification";
import Order from "../pages/Order/Order";
const Home = lazy(() => import("../pages/Home/Home"));

const routes = {
  home: "/",
  notification: "/notification",
  order: "/order",
};
export const publicRoutes: RouteConfig[] = [
  { name: "Trang Chủ", path: routes.home, components: Home },
  { name: "Thông báo", path: routes.notification, components: Notification },
  { name: "Giỏ hàng", path: routes.order, components: Order },
];

export const privateRoutes: RouteConfig[] = [];
