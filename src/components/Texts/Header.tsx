import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export const Header = (props: HeaderProps) => {
  const { children } = props;
  return (
    <Typography
      gutterBottom
      variant="h4"
      component="div"
      fontWeight={500}
      sx={{ textTransform: "capitalize" }}
    >
      {children}
    </Typography>
  );
};
