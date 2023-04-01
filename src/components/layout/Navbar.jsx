import {
  AppBar,
  Container,
  Toolbar,
  Link as MuiLink,
  List,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { motion } from "framer-motion";
import { theme } from "@/styles/theme";


export default function Navbar({ logo }) {
  const links = ["home", "Projects", "Contact"];

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          color: "#000",
        }}
        elevation={0}
        component={motion.header}
        initial={{ y: "-1rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: ["1rem", "1.5rem", "2rem"]
            }}
          >
            <Box
              sx={{
                paddingRight: ["0", "2rem", "0"],
                display: { md: "none" },
              }}
            >
              <IconButton
                sx={{
                  color: "#182639",
                }}
                aria-label="open navigation menu"
                size="medium"
              >
                <MenuIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <MuiLink
              component={Link}
              href="/"
              underline="none"
              sx={{
                color: "#182639",
                "&:hover": { color: "#000" },
                marginRight: ["0", "auto", "0"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Jesse Krensel</Typography>
            </MuiLink>

            <Box sx={{ display: "flex", gap: "1rem" }}>
              <List sx={{ display: ["none", "none", "inline"] }}>
                {links.map((link, index) => (
                  <MuiLink
                    component={Link}
                    key={index}
                    href={link !== "home" ? `#${link}` : "/"}
                    sx={{
                      color: "#182639",
                      padding: "0px 2rem",
                      "&:hover": { color: "#000" },
                      textTransform: "capitalize",
                    }}
                    underline="none"
                  >
                    {link}
                  </MuiLink>
                ))}
              </List>
              <Button
                endIcon={<PictureAsPdfOutlinedIcon />}
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "transparent",
                  color: "#182639",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#c3e9e6",
                    boxShadow: "none",
                  },
                }}
                elevation={0}
                href="/assets/Placeholder-PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>Resume</Typography>
              </Button>
            </Box>
          </Toolbar>
          <Box
            sx={{
              margin: ["0", "0 1.5rem"],
              borderBottom: "2px solid rgba(0,0,0,0.05)",
              display: ["none", "block"],
            }}
          ></Box>
        </Container>
      </AppBar>
      <Box
        sx={{
          borderTop: "2px solid rgba(0,0,0,0.05)",
          display: ["block", "none"],
        }}
      ></Box>
    </>
  );
}
