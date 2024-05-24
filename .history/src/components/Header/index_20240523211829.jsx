import { Box, Stack, Typography } from "@mui/material";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Figma from "../../assets/figma.png";
import AnimatedLogo from "../AnimatedLogo";

export default function Header() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Stack
        gap={4}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          height: "137px",
          background: "#0F1624",
        }}
      >
        <Box marginLeft="30px">
          <AnimatedLogo />
        </Box>

        <Stack
          gap={4}
          sx={{
            width: "100vw",
            marginRight: "129px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "background-color 0.3s ease", // Transição suave para a cor de fundo
              "&:hover": {
                backgroundColor: "rgba(211, 190, 190, 0.641)",
                borderRadius: "5px"
              },
            }}
            onClick={scrollToProjects}
          >
            Projetos
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "background-color 0.3s ease", // Transição suave para a cor de fundo
              "&:hover": {
                backgroundColor: "rgba(211, 190, 190, 0.641)",
                borderRadius: "5px"
              },
            }}
          >
            Tecnologias
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "background-color 0.3s ease", // Transição suave para a cor de fundo
              "&:hover": {
                backgroundColor: "rgba(211, 190, 190, 0.641)",
                borderRadius: "5px"
              },
            }}
          >
            Sobre mim
          </Typography>
          <IconButton
            onClick={() => window.open("https://github.com")}
            aria-label="Github"
            sx={{ color: "#FFFFFF" }}
          >
            {Github}
          </IconButton>
          <IconButton
            onClick={() => window.open("https://linkedin.com")}
            aria-label="Linkedin"
            sx={{ color: "#FFFFFF" }}
          >
            {Linkedin}
          </IconButton>
          <IconButton
            onClick={() => window.open("https://figma.com")}
            aria-label="Figma"
            sx={{ color: "#FFFFFF" }}
          >
            {Figma}
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
