import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbarfont">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
            Projeto Eco Rede
          </IconButton>
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decoration-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className={classes.title}>
                  Home
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor">
              <Typography variant="h6" className={classes.title}>
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" className={classes.title}>
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" className={classes.title}>
                Cadastrar Temas
              </Typography>
            </Box>
            <Link to="/sobre" className="text-decoration-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className={classes.title}>
                  Sobre Nós
                </Typography>
              </Box>
            </Link>
          </Box>
          <Link to="/login" className="text-decoration-none cursor">
            <Button className="botao2" color="inherit">
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
