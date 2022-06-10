import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import './Sobre.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/token/tokensReducer';
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'



function Sobre(){
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
    
    return( 
        <Grid xs={8} className='sobre'>
            <Box>
        <h1>
        SOBRE NÓS
        </h1>

        <Grid xs={6} className='logo'></Grid>
    
        <p>
       Uma rede social, voltada para as questões ambientais, que inicialmente foi pensada para Capital e algumas regiões próximas da Grande SP.
Nesta rede social, o usuário poderá compartilhar conteúdos, como: indicações de serviços que possam ajudar, pedidos de ajuda, denúncias.
        </p>
    </Box>
    <Box>
        <p>Fale conosco</p>
        <a href="mailto:projetoecorede@gmail.com"  target="_blank">Email</a>
        
    </Box>

        </Grid>

    
        )
}

export default Sobre;