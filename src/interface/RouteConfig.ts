import type { ReactNode } from "react";

export interface RouteConfig {
  name?: string;
  path: string;
  component: React.ComponentType; // Sử dụng ComponentType để hỗ trợ nhiều loại component
  layout?: React.FC<{ children: ReactNode }> | null;
  icon?: React.ReactNode;
  requireAuth?: boolean;
  hidden?: boolean;
}
