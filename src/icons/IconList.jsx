import { Box } from "@mui/material";
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

const icons = [
    <HtmlIcon key="html" />,
    <CssIcon key="css" />,
    <JavaScriptIcon key="javascript" />,
    <ReactIcon key="react" />,
    <MuiIcon key="mui" />,
    <NextjsIcon key="nextjs" />,
    <FigmaIcon key="figma" />,
    <HerokuIcon key="heroku" />,
    <NetlifyIcon key="netlify" />,
    <VercelIcon key="vercel" />,
  ];

export default function IconList() {
    return (
      <>
        {icons.map((icon, index) => (
          <Box key={index} sx={{ height: "2rem", width: "2rem" }}>
            {icon}
          </Box>
        ))}
      </>
    );
  };