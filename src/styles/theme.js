import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });
let theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
    subtitle1: { fontFamily: ubuntuMono.style.fontFamily },
  },
});
theme = responsiveFontSizes(theme);
export { theme };
