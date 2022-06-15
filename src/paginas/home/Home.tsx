import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/token/tokensReducer';
import {toast} from 'react-toastify'
import Feed from '../feed/Feed';

function Home() {
    
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: "undefined"
            })
            history("/login")
    
        }
    }, [token])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid>
        <img className='logooficial'  src="https://i.imgur.com/VImomhY.png?1" alt="" />

        <Box >
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
          <Box display="flex" justifyContent="center"  className="bnthome">
            <Box marginRight={1}>
            <ModalPostagem/> 
            </Box>
            <Link to='/postagem' className='text-decorator-none'>
            <Button className="btnpostagem">Ver Postagens</Button>
            </Link>
          </Box>  
        </Grid>
        {/* <Grid alignItems="center" item xs={6}>
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
            <Box marginRight={1}>
            <ModalPostagem/> 
            </Box>
            <Link to='/postagem' className='text-decorator-none'>
            <Button className="btnpostagem">Ver Postagens</Button>
            </Link>
          </Box>
        </Grid> */}
        {/* <Grid item xs={6}>

          <img
          src="https://i.imgur.com/dnbM4zU.png"
          alt=""
          width="100%"
          height="550px" 
          />

        </Grid> */}
        <Grid xs={12} className="postagens">
        </Grid>
        </Grid>
        <TabPostagem />
    </>
  );
}

export default Home;
