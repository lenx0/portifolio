import { Box, Stack, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box sx={{ margin: "157px 0 0 192px" }}>
      <Typography
        sx={{
          fontSize: "64px",
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "#FFFFFF",
        }}
      >
        THIAGO DE FREITAS BERALDO
      </Typography>
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "#FFFFFF",
        }}
      >
        Desenvolvedor Front-End
      </Typography>
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "#BCBCBC",
          marginTop: "30px",
        }}
      >
        ReactJS | Javascript | Typescript |<br />
        NodeJS | MongoDB | AWS
      </Typography>
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "#BCBCBC",
        }}
      ></Typography>
    </Box>
  );
}
