import { Box, Stack, Typography } from "@mui/material";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Figma from "../../assets/figma.png";
import AnimatedLogo from "../AnimatedLogo";

export default function Header() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      // Rolar suavemente até a seção de projetos
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
              cursor: "pointer", // Adicionando estilo de cursor de clique
            }}
            onClick={scrollToProjects} // Chama a função para rolar até a seção de projetos
          >
            Projetos
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#FFFFFF",
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
            }}
          >
            Sobre mim
          </Typography>
          <img src={Github} width={32} height={32} />
          <img src={Linkedin} width={32} height={32} />
          <img src={Figma} width={32} height={32} />
        </Stack>
      </Stack>
    </>
  );
}
