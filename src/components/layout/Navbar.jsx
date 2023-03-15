import {
    AppBar,
    Container,
    Toolbar,
    Link as MuiLink,
    List,
    IconButton,
    Box,
    Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";


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
                            padding: "2rem",
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

                        <List sx={{ display: ["none", "none", "inline"] }}>
                            {links.map((link, index) => (
                                <MuiLink
                                    component={Link}
                                    key={index}
                                    href={link !== "home" ? link : "/"}
                                    variant="body2"
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
                    </Toolbar>
                    {/* <Box
                        sx={{
                            margin: ["0", "0 1.5rem"],
                            padding: ["0", "1.5rem 0 0"],

                            borderBottom: "solid 1px #2b2b2b",
                            display: ["none", "block"],
                        }}
                    ></Box> */}
                </Container>
            </AppBar>
            {/* <Box
                sx={{
                    borderTop: "solid 1px #2b2b2b",
                    display: ["block", "none"],
                }}
            ></Box> */}
        </>
    );
}
