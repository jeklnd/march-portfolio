import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Box, Grid } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `radial-gradient(at 44% 0%, #E0F7FA 0px, transparent 50%),
                    radial-gradient(at 80% 0%, #E0FFFF 0px, transparent 50%),
                    radial-gradient(at 80% 50%, #B2DFDB 0px, transparent 50%),
                    radial-gradient(at 0% 100%, #B3E5FC 0px, transparent 50%),
                    radial-gradient(at 80% 100%, #CFD8DC 0px, transparent 50%),
                    radial-gradient(at 0% 0%, #CFD8DC 0px, transparent 50%)`,
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Grid
        container
        sx={{
          position: "absolute",
          height: "100%",
          zIndex: -1,
        }}
      >
        {[...Array(48)].map((_, i) => (
          <Grid
            item
            key={i}
            xs={0.25}
            sx={{
              borderRight: "2px solid rgba(0,0,0,0.05)",
              marginBottom: Math.random() * 90,
              borderRadius: "0 0 1rem 0",
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}
