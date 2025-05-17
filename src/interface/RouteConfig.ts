import type { ReactNode } from "react";

export interface RouteConfig {
  name?: string;
  path: string;
  components: React.FC;
  layout?: React.FC<{ children: ReactNode }> | null;
  icon?: React.ReactNode;
  requireAuth?: boolean;
  hidden?: boolean;
}
