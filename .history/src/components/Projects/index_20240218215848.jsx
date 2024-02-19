import { Box, Typography } from "@mui/material";

import ProjectsCard from "../ProjectsCard";

export default function Projects() {
  return (
    <>
      <Box
        sx={{ width: "100vw", justifyContent: "center", textAlign: "center" }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "Poppins",
            fontWeight: "300",
            color: "#FFFFFF",
            marginTop: "600px",
            marginBottom: "100px",
          }}
        >
          Projetos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          placeItems: "center",
          gap: "20px",
          minHeight: "100vh",
        }}
      >
        <ProjectDelivery />
        <ProjectDelivery />
        <ProjectDelivery />
        <ProjectDelivery />
      </Box>
    </>
  );
}
