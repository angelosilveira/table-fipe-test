import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Components {
    MainMenuFrameComponent: {};
    GameButtonComponent: {};
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  bgColor: {
    main: "#fceefd",
    secondary: "#bdddca",
  },
});
