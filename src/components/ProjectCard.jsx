import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Box,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Image from "next/image";

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
      initial={{ y: "2rem", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: project.id === 0 ? 1.5 : 0,
        ease: "easeIn",
      }}
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}
