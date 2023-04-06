import {
  AppBar,
  Container,
  Toolbar,
  List,
  Link as MuiLink,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { motion } from "framer-motion";

export default function Navbar({ logo }) {
  const links = ["home", "Projects"];
  const variants = {
    hidden: { opacity: 0, y: -8 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + index * 0.1 },
    }),
  };

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          color: "#000",
        }}
        elevation={0}
        id="home"
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: ["1rem", "1.5rem", "2rem"],
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
              href="/"
              sx={{
                color: "#182639",
                "&:hover": { color: "#000" },
                marginRight: ["0", "auto", "0"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h4"
                component={motion.h4}
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transform={{ duration: 0.1 }}
              >
                Jesse Krensel
              </Typography>
            </MuiLink>

            <Box sx={{ display: "flex", gap: "1rem" }}>
              <List sx={{ display: ["none", "none", "inline"] }}>
                {links.map((link, index) => (
                  <Box
                    key={index}
                    sx={{ display: "inline-block" }}
                    component={motion.div}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    custom={index}
                  >
                    <MuiLink
                      href={`#${link}`}
                      sx={{
                        color: "#182639",
                        padding: "0px 2rem",
                        "&:hover": { color: "#000" },
                        textTransform: "capitalize",
                        listStyle: "none",
                        textDecoration: "none",
                        margin: 0,
                        position: "relative",
                        display: "inline",
                      }}
                    >
                      {link}
                    </MuiLink>
                  </Box>
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
                component={motion.a}
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
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
