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
      <Projects />
      <Technologies />
    </Box>
  );
}

export default App;
