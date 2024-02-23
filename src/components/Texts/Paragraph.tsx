import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  color?: string;
}
export const Paragraph = (props: ParagraphProps) => {
  const { children, color } = props;
  return (
    <Typography
      variant="body2"
      color={color || "text.secondary"}
      fontWeight={400}
      fontSize={16}
    >
      {children}
    </Typography>
  );
};
