import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    bgColor: {
      main: string;
      secondary: string;
    };
  }

  interface ThemeOptions {
    bgColor: {
      main: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
    };
  }
}
