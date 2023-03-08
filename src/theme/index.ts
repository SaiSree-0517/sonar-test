import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
  }
  interface Palette {
    primary: Palette["primary"];
    textColor: Palette["primary"];
    structural: Palette["primary"];
    borders: Palette["primary"];
    icon: Palette["primary"];
  }
  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
    structural?: PaletteOptions["primary"];
    borders?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
  }
  interface Color {
    white500?: string;
    purple400?: string;
    purple500?: string;
    purple600?: string;
    highemp?: string;
    medemp?: string;
    lowemp?: string;
    elevation0?: string;
    elevation1?: string;
    elevation2?: string;
    grey100?: string;
  }
  interface PaletteColor extends Color {}
  interface SimplePaletteColorOptions extends Color {}
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    heading2: true;
    heading3: true;
  }
}
export const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Gilroy-Bold",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "42px",
      letterSpacing: "-0.015em",
    },
    heading2: {
      fontFamily: "Gilroy-Bold",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "29px",
      letterSpacing: "-0.005em",
    },
    heading3: {
      fontFamily: "Gilroy-Medium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
    },
    body1: {
      fontFamily: "Gilroy-Medium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "22px",
    },
    body2: {
      fontFamily: "Gilroy-SemiBold",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "0.01em",
    },
    caption: {
      fontFamily: "Gilroy-Medium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
    },
    button: {
      fontFamily: "Gilroy-SemiBold",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#6C5DD3",
      white500: "#E8E8E9",
      purple400: "#B4A9FF",
      purple500: "#6C5DD3",
      purple600: "#393552",
    },
    textColor: {
      main: "#FCFCFC",
      highemp: "#E8E7F0",
      medemp: "#C9C8CC",
      lowemp: "#A5A5A6",
    },
    structural: {
      main: "#040407",
      grey100: "#262529",
      elevation0: "#19181C",
      elevation1: "#201F24",
      elevation2: "#2D2D30",
    },
    borders: {
      main: "#FFF",
      highemp: "#413F4D",
      lowemp: "#28272B",
    },
    icon: {
      main: "#FFF",
      highemp: "#D4D2DE",
      lowemp: "#727080",
    },
  },
});
