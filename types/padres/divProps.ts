import type { ReactNode } from "react";

export type DivProps = {
  className?: string;
  children: ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};