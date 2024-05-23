import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Figma from "../../assets/figma.png";

export default function Header() {
  return (
    <>
      <Stack
        gap={4}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          height: "137px",
          background: "#0F1624",
          marginLeft: "131px",
        }}
      >
        <img src={Logo} width={48} height={48} />

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
            }}
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
