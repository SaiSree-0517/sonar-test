import React from "react";
import { Typography } from "@mui/material";

interface PropsType {
  variant?:
    | "button"
    | "caption"
    | "heading4"
    | "heading6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline";
  children?: string;
  align?: "inherit" | "center" | "right" | "left" | "justify" ;
  fontWeight?: number;
}

export const MuiTypography = ({
  variant,
  children,
  align,
  fontWeight,
  ...rest
}: PropsType) => {
  return (
    <div>
      <Typography variant={variant} align={align} fontWeight={fontWeight}>
        {children}
      </Typography>
    </div>
  );
};
