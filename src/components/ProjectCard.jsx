import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Box,
  Button,
  Typography,
  Tooltip
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactIcon from "@/icons/ReactIcon";
import NextjsIcon from "@/icons/NextjsIcon";
import HtmlIcon from "@/icons/HtmlIcon";
import CssIcon from "@/icons/CssIcon";
import JavaScriptIcon from "@/icons/JavaScriptIcon";
import MuiIcon from "@/icons/MuiIcon";
import FigmaIcon from "@/icons/FigmaIcon";
import HerokuIcon from "@/icons/HerokuIcon";
import VercelIcon from "@/icons/VercelIcon";
import NetlifyIcon from "@/icons/NetlifyIcon";

export default function ProjectCard({ project }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      key={project.id}
      sx={{
        padding: ["0 0.25rem", "0 0.375rem", "0 0.5rem"],
      }}
      component={motion.div}
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1,
      }}
      id={project.id === 0 && "Projects"}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: "16px",
          backgroundColor: `${project.bgColor}60`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            position: "absolute",
            right: 0,
            margin: "0.25rem -0.5rem 0 0",
            zIndex: 102,
            "&:hover": {
              "& + a > div": { backgroundColor: "#000000" },
            },
          }}
          href={project.githubRepo}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon variant="contained"></GitHubIcon>
        </Button>
        <a
          href={project.githubRepo}
          rel="noopener noreferrer"
          target="_blank"
          sx={{}}
        >
          <Box
            sx={{
              height: "8rem",
              width: "8rem",
              backgroundColor: "#fff",
              position: "absolute",
              right: 0,
              transform: "rotate(42.5deg) translate(-0.25rem, -6rem)",
              backgroundColor: "#00000090",
              color: "#ffffff90",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#ffffff",
                cursor: "pointer",
              },
              zIndex: 101,
            }}
          ></Box>
        </a>

        <CardActionArea
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader
            title={project.title}
            subheader={project.type}
            sx={{
              "& .MuiCardHeader-avatar": { order: 2, margin: "0" },
            }}
          ></CardHeader>
          <CardContent
            sx={{
              justifyContent: "center",
              display: "flex",
              height: "28rem",
              padding:
                project.title.toLowerCase() === "Audiophile".toLowerCase()
                  ? "0"
                  : "0 1rem 1rem 1rem",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <Image
                src={project.image}
                alt="project image"
                fill
                style={{ objectFit: "contain" }}
              ></Image>
            </Box>
          </CardContent>
          {/* <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {(() => {
              if (project.id === 0) {
                return (
                  <>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <ReactIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <NextjsIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <MuiIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <FigmaIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <VercelIcon />
                    </Box>
                  </>
                );
              } else if (project.id === 1) {
                return (
                  <>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <ReactIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <NextjsIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <MuiIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <FigmaIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <NetlifyIcon />
                    </Box>
                  </>
                );
              } else if (project.id === 2) {
                return (
                  <>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <ReactIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <FigmaIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <NetlifyIcon />
                    </Box>
                  </>
                );
              } else if (project.id === 3) {
                return (
                  <>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <HtmlIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <CssIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <JavaScriptIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <FigmaIcon />
                    </Box>
                    <Box sx={{ height: "2rem", width: "2rem" }}>
                      <HerokuIcon />
                    </Box>
                  </>
                );
              }
            })(project)}
          </CardContent> */}
        </CardActionArea>
      </Card>
    </Grid>
  );
}
