import { Box, Grid } from '@mui/material';
import React from 'react';
import './Sobre.css';


function Sobre(){
    
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