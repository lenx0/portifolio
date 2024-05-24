import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

import lenxdelivery from "../../assets/lenxdelivery.png";

export default function ProjectDelivery() {
  return (
    <>
      <Card
        sx={{
          width: "550px",
          height: "550px",
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
              }}
            >
              <a
                href="https://front-lenxdelivery.vercel.app/"
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
                Lenx Delivery
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
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Poppins",
              color: "#FFF",
            }}
          >
            O projeto demonstra um sistema de entrega de comidas, bebidas e
            sobremesas. Possui uma página inicial, uma listagem dos produtos, um
            mapa para marcar o local de entrega dentre outras funcionalidades.
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
            <strong>Front:</strong> React.js | Javascript | Typescript |
            Material-UI <br />
            <strong>Back:</strong> Node.js |Typescript | MongoDB
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
