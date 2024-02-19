import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

import lenxdelivery from "../../assets/pokemonwiki.png";

export default function ProjectPokemonWiki() {
  return (
    <>
      <Card
        sx={{
          width: "550px",
          height: "700px",
          borderRadius: "50px 0 50px 0",
          backgroundColor: "#0F1624",
          border: "1px solid #FFF",
          boxShadow: "0px 0px 12px 0px #FFF",
          flexShrink: "0",
          marginBottom: "150px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "10px 10px 0 10px",
            }}
          >
            <img
              src={lenxdelivery}
              width={500}
              height={266}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
  sx={{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
  <Typography
    sx={{
      fontSize: "36px",
      fontWeight: "600",
      fontFamily: "Poppins",
      color: "#FFF",
      position: "relative",
      marginTop: "10px",
      "&:hover": {
        color: "#FF0000", // Altere para a cor desejada
      },
    }}
  >
    <a
      href="https://poke-wiki-front.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        fontSize: "36px",
        fontWeight: "600",
        fontFamily: "Poppins",
        color: "#FFF",
        position: "relative",
        marginTop: "10px",
        display: "block",
      }}
    >
      Pokemon Wiki
    </a>
  </Typography>
  <Box
    sx={{
      height: "4px",
      borderRadius: "83px",
      margin: "10px 125px 0 125px",
      background:
        "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
    }}
  ></Box>
</Box>;

          ;
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Poppins",
              color: "#FFF",
            }}
          >
            O projeto exibe uma lista de todos os pokémon existentes, você pode
            escolher visualiza-los em modo card ou em uma tabela. Também temos
            filtros por tipo e nome, paginação, além de podermos visualizar os
            bixinhos se movimentando.
            <br />
            <br />
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Poppins",
              color: "#FFF",
            }}
          >
            <strong>Tecnologias utilizadas:</strong>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#FFF",
            }}
          >
            <strong>Front:</strong> NextJS | ReactJS | Javascript | Material-UI
            <br />
            <strong>Back:</strong> PokeAPI: https://pokeapi.co/
          </Typography>
        </CardContent>
        <CardActions sx={{ color: "#e9e9e9" }}>
          <Button size="small">Ação 1</Button>
          <Button size="small">Ação 2</Button>
        </CardActions>
      </Card>
    </>
  );
}
