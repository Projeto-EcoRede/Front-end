import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';
import { addToken } from '../../../store/token/action';
import {toast} from 'react-toastify'

function Navbar() {

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

  const classes = useStyles();
  let history = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens);

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    })
    history('/login')
  }

  var navbarComponent;

  if(token !== ""){
    navbarComponent = 
    <div className={classes.root}>

      <AppBar position="static" >
        <Toolbar className="navbar">
        <Link to="/home" className="text-decorator-none">
              <Box mx={1} className='cursor  navbarcolor'>
              <Typography variant="h6" className="bold">
                  Home
                </Typography>
              </Box>
            </Link>           
            <Link to="/feed" className="text-decorator-none">
              <Box mx={1} className='cursor navbarcolor'>
              <Typography variant="h6" className="bold">
                 Feed
                </Typography>
              </Box>
            </Link>
            <Link to="/tema" className="text-decorator-none">
              <Box mx={1} className='cursor  navbarcolor'>
              <Typography variant="h6" className="bold">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className='cursor  navbarcolor'>
              <Typography variant="h6" className="bold">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioPostagem" className="text-decorator-none">
              <Box mx={1} className='cursor navbarcolor'>
              <Typography variant="h6" className="bold">
                  Cadastrar Postagem
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre" className="text-decorator-none">
              <Box mx={1} className='cursor navbarcolor'>
              <Typography variant="h6" className="bold">
                  Sobre Nós
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='cursor navbarcolor' onClick={goLogout}>
            <Typography variant="h6" className="bold ">
              Logout
              </Typography>
            </Box>


        </Toolbar>
      </AppBar>
      </div>
      }


  return (
    <>
    {navbarComponent} 
    </>
  )
}
export default Navbar;