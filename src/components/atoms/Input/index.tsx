import React from "react";
import { TextField, InputAdornment } from "@mui/material";



interface InputProps {
  variant?: "outlined" | "standard" | "filled";
  label?: string;
  color?: "primary" | "error" | "secondary" | "info" | "success" | "warning";
  helperText?: string;
  icon?:JSX.Element;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    variant = "outlined",
    label = "email",
    color = "primary",
    helperText
  } = props;
  return (
    <TextField
      variant={variant}
      label={label}
      color={color}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
           {props.icon}
          </InputAdornment>
        ),
      }}
      {...props}
    ></TextField>
  );
};

export default Input;
