import { Box, Typography } from "@mui/material";

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies";
import "./App.css";

function App() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <Box
        id="projects"
        sx={{ width: "100vw", justifyContent: "center", textAlign: "center" }}
      >
        <Projects />
      <Technologies />
      </Box>
      
    </Box>
  );
}

export default App;
