import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import useLocalStorage from "react-use-localstorage";

import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Bem vindes!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h2"
              align="center"
              className="titulo"
            >
              Pensamentos e opniões sempre com respeito!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button className="botao">Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>

          <img
          src="https://i.imgur.com/WsX3FfU.png"
          alt=""
          width="500px"
          height="500px" 
          />

        </Grid>
        <Grid xs={12} className="postagens"></Grid>
        </Grid>
    </>
  );
}

export default Home;
