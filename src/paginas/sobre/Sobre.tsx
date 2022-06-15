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


        <Grid container className='sobre body'>
            <Grid>

                <Box className='display' >

                    <p className='textosobre'>Uma Rede Social desenvolvida por alunes da Generation Brasil, onde o foco é conectar e incentivar a interação entre as pessoas, abordando assuntos com a temática ecológica. 
                    Aqui a intenção é promover, debater, e até denunciar sobre as mais variadas situações que encontramos em nossa comunidade.
                    As pessoas terão acesso ao que sua região oferece, pois a nossa rede proporciona o espaço perfeito para conectar os moradores com os profissionais de reciclagem e de áreas correlatas. </p>
                </Box>
            <Box className='logo'></Box>
            </Grid>
            <Grid className='gridTextoCont'>
            <p className='textocontato'>
                    Qualquer dúvida entre em contato conosco:
                </p>
                </Grid>
            <Grid className="display">
            
            <Box display="flex" alignItems="center" justifyContent="center">
               
                            <a href="https://github.com/Projeto-EcoRede" target="_blank">
                                <img className='redes' src="https://i.imgur.com/qQtYqr9.png?1" alt="Logo GitHub" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <img className='redes' src="https://i.imgur.com/rQIBjvN.png" alt="Logo Instagram" />
                            </a>
                            <a href="mailto:projetoecorede@gmail.com"  target="_blank">
                            <img className='redes' src="https://i.imgur.com/61MhAFN.png" alt="Logo Email" />
                            </a> 
                        </Box>

            </Grid>
        </Grid>

        )
}

export default Sobre;