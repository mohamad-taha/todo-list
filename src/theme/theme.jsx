import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: "tajawal",

    h1: {
      fontFamily: "rubik",
      fontWeight: "500",
      color: "#212121",
      fontSize: "70px",
    },
  },
});

export const TableTheme = createTheme({
  typography: {
    fontFamily: "tajawal",
    fontWeightRegular: "600",
  },
});
export default Theme;
