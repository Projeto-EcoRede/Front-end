import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Typography, Box, Grid } from "@mui/material";
import "./Footer.css";
import GitHub from "@material-ui/icons/GitHub";

function Footer() {
  return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#08d15ced", height: "120px" }}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: "black" }}
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/Projeto-EcoRede" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub style={{ fontSize: 60, color: "black" }} />
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#b9f1b3", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "black" }}
              >
                © Todos os direitos reservado Copyright:
              </Typography>
            </Box>
            <Box>
              <a
                target="_blank"
                href="Projeto EcoRede"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "black" }}
                  align="center"
                >
                  Projeto EcoRede
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
}
export default Footer;