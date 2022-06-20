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


        <Grid className='gridprinSobre'>
            <Box className='displaySobre'>
            <p className='textosobre'>Uma Rede Social desenvolvida por alunes da Generation Brasil, onde o foco é conectar e incentivar a interação entre as pessoas, abordando assuntos com a temática ecológica.
                <br />Aqui a intenção é promover, debater, e até denunciar sobre as mais variadas situações que encontramos em nossa comunidade.
                    As pessoas terão acesso ao que sua região oferece, pois a nossa rede proporciona o espaço perfeito para conectar os moradores com os profissionais de reciclagem e de áreas correlatas.</p>
                <img className='logoSobre' src="https://i.imgur.com/CKzhFwT.png" alt="" />
                </Box>


               
                <h3>Time de Desenvolvedores</h3>

          <Grid className='displaySobre'>

            
            <Box className='boxDevs'>
            <h4>Rafael Dias Rodrigues</h4>
            <img className='fotodev' src="https://i.imgur.com/CXQzy3I.jpg" alt="" />
            <p>Desenvoldedor Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/rafaeldiasrodrigues92/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/RafaelRodrigues92">GitHub</a>
            </Box>     
            <Box className='boxDevs'>
            <h4>Mauricio Ferreira</h4>
            <img className='fotodev' src="https://i.imgur.com/xmhZQTy.jpg" alt="" />
            <p>Desenvoldedor Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/mauricio-oliveira-ferreira-5a703619b/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/MauricioBRA">GitHub</a>
            </Box>     
            <Box className='boxDevs'>
            <h4>Jéssica Silva</h4>
            <img className='fotodev' src="https://i.imgur.com/FgMzhtW.jpg" alt="" />
            <p>Desenvoldedora Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/j%C3%A9ssica-b-da-silva-66793048/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/jessbslee">GitHub</a>
            </Box>     
            <Box className='boxDevs'>
            <h4>José Lumbo</h4>
            <img className='fotodev' src="https://i.imgur.com/4qhxevP.jpg" alt="" />
            <p>Desenvoldedor Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/jose-lumbo-464b71220/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/joseLumbo">GitHub</a>
            </Box>     
            <Box className='boxDevs'>
            <h4>Felipe Belluco</h4>
            <img className='fotodev' src="https://i.imgur.com/4paPkCA.jpg" alt="" />
            <p>Desenvoldedor Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/febelluco/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/FeBelluco">GitHub</a>
            </Box>  
            <Box className='boxDevs'>
            <h4>Ariane Lima</h4>
            <img className='fotodev' src="https://i.imgur.com/YzMBm57.jpg" alt="" />
            <p>Desenvoldedora Full Stack</p>
            <a className='text-decorator-none linkdev' href="https://www.linkedin.com/in/ariane-alves-lima-57744a20b/">LinkedIn</a> <hr />
            <a className='text-decorator-none linkdev' href="https://github.com/ariiialima">GitHub</a>
            </Box>  
            </Grid>          
          </Grid> 

        )
}

export default Sobre;