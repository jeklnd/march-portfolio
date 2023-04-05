import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }) {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setisLoading(false), 2500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {!isLoading ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <LoadingScreen isLoading={isLoading} />
        )}
      </CssBaseline>
    </ThemeProvider>
  );
}
