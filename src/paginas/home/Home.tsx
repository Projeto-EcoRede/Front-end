import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/token/tokensReducer';
import {toast} from 'react-toastify'
import Feed from '../feed/Feed';
import Sobre from '../sobre/Sobre';

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
            progress: undefined,
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
              Pensamentos e opiniões sempre com respeito!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center"  className="bnthome">
            <Box marginRight={1} className='botaonovapostagem'>
            <ModalPostagem/> 
            </Box>
            <Link to='/postagem' className='text-decorator-none'>
            <Button className="btnpostagem">Ver Postagens</Button>
            </Link>
          </Box>  
          <Box className='sobreHome' >
                    <p className='textosobreHome'>Uma Rede Social desenvolvida por alunes da Generation Brasil, onde o foco é conectar e incentivar a interação entre as pessoas, abordando assuntos com a temática ecológica.
                    <br />Aqui a intenção é promover, debater, e até denunciar sobre as mais variadas situações que encontramos em nossa comunidade.
                    As pessoas terão acesso ao que sua região oferece, pois a nossa rede proporciona o espaço perfeito para conectar os moradores com os profissionais de reciclagem e de áreas correlatas.</p>
                </Box>              
        </Grid>    
        
        </Grid>
        
    
    </>
  );
}

export default Home;
