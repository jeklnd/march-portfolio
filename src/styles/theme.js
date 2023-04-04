import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
let theme = createTheme({
  typography: { fontFamily: openSans.style.fontFamily },
});
theme = responsiveFontSizes(theme);
export { theme };
