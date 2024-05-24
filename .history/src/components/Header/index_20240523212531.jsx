import { Box, IconButton, Stack, Typography } from "@mui/material";
import GithubIcon from "../../assets/github.png";
import LinkedinIcon from "../../assets/linkedin.png";
import FigmaIcon from "../../assets/figma.png"; // Importe o ícone de Figma como uma imagem
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
          {/* Use imagens para os ícones de rede social */}
          <IconButton
            onClick={() => window.open("https://github.com")}
            aria-label="Github"
            sx={{ width: "32px", height: "32px", color: "#FFFFFF" }}
          >
            <img src={GithubIcon} width={32} height={32} alt="Github" />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://linkedin.com")}
            aria-label="Linkedin"
            sx={{ width: "32px", height: "32px", color: "#FFFFFF" }}
          >
            <img src={LinkedinIcon} width={32} height={32} alt="Linkedin" />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://figma.com")}
            aria-label="Figma"
            sx={{ width: "32px", height: "32px", color: "#FFFFFF" }}
          >
            <img src={FigmaIcon} width={32} height={32} color="#FFFFFF" alt="Figma" />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
