import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export const Header = (props: HeaderProps) => {
  const { children } = props;
  return <h4 className="h4-text">{children}</h4>;
};
