import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsAnimating(!isAnimating), 1200);
  }, [isAnimating]);

  const draw = {
    hidden: {
      opacity: 0,
    },
    visible: (i) => {
      const delay = i * 0.2;
      return {
        opacity: 1,
        transition: {
          opacity: { delay, duration: 0.4 },
        },
      };
    },
  };
  return (
    <Box
      component={motion.div}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `radial-gradient(at 44% 0%, #E0F7FA 0px, transparent 50%),
              radial-gradient(at 80% 0%, #E0FFFF 0px, transparent 50%),
              radial-gradient(at 80% 50%, #B2DFDB 0px, transparent 50%),
              radial-gradient(at 0% 100%, #B3E5FC 0px, transparent 50%),
              radial-gradient(at 80% 100%, #CFD8DC 0px, transparent 50%),
              radial-gradient(at 0% 0%, #CFD8DC 0px, transparent 50%)`,
      }}
    >
      <Box sx={{ width: "6rem", height: "6rem" }}>
        <motion.svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          initial="hidden"
          animate="visible"
        >
          <motion.g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <AnimatePresence>
              {isAnimating && (
                <motion.path
                  d="M2670 2880 l0 -1170 180 0 180 0 0 283 0 283 76 74 c65 64 77 73 87
  59 7 -8 133 -169 280 -357 l269 -342 229 0 c182 0 229 3 223 13 -5 6 -176 222
  -382 480 l-374 467 48 55 c27 30 181 189 343 355 l293 300 -228 0 -229 0 -317
  -317 -318 -318 0 653 0 652 -180 0 -180 0 0 -1170z"
                  variants={draw}
                  custom={2}
                  exit={{ scale: 0, rotate: 360, translateX: -16 }}
                  transition={{ scale: { duration: 0.3 } }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isAnimating && (
                <motion.path
                  d="M1665 3946 c-153 -57 -166 -299 -20 -371 59 -29 157 -26 213 5 126
  71 130 274 6 350 -46 29 -143 36 -199 16z"
                  variants={draw}
                  custom={3}
                  exit={{ scale: 0, rotate: 360 }}
                  transition={{ scale: { duration: 0.3 } }}
                />
              )}
            </AnimatePresence>
            \
            <AnimatePresence>
              {isAnimating && (
                <motion.path
                  d="M1050 3220 l0 -160 263 -2 262 -3 0 -710 c0 -659 -1 -714 -18 -762
  -46 -130 -125 -183 -287 -191 -54 -2 -149 1 -210 7 -62 7 -114 11 -115 9 -7
  -7 -27 -299 -21 -305 16 -16 174 -32 317 -32 124 -1 172 3 234 19 246 63 395
  218 446 463 18 86 19 147 19 960 l0 867 -445 0 -445 0 0 -160z"
                  variants={draw}
                  custom={1}
                  exit={{ scale: 0, rotate: 360 }}
                  transition={{ scale: { duration: 0.3 } }}
                />
              )}
            </AnimatePresence>
          </motion.g>
        </motion.svg>
      </Box>
      {/* <Box sx={{ position: "relative", height: "4rem", width: "4rem" }}>
          <Image src={logo} alt="loading screen logo" fill></Image>
        </Box> */}
    </Box>
  );
}
