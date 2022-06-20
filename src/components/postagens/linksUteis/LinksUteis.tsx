import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/token/tokensReducer'

import User from '../../../models/User'
import { buscaId } from '../../../services/Service'

import './LinksUteis.css'

function LinksUteis() {

   
    return (
        <Grid className='card-prin-links'>
            <h3>Links Úteis</h3>
                <Box className='card-links-info'>
                <h5>Moeda verde</h5>
                <img className='img-links' src="https://i.imgur.com/dy9kfNP.jpeg" alt="" />
                    <p>O Moeda Verde é uma ação que 
mobiliza moradores de comunidades carentes de Santo André (SP) a trocarem itens recicláveis que iriam para o lixo comum por alimentos hortifrúti
</p>
                    <a className='text-decorator-none link-util' href="https://semasaccs.wixsite.com/moedaverde">Projeto Moeda Verde</a>
                    <hr />
                </Box>
                <Box className='card-links-info'>
                <h5>Pimp My Caroça</h5>
                <img className='img-links' src="https://i.imgur.com/hbrl2Fd.jpg" alt="" />
                    <p>Movimento para tirar os catadores de materiais recicláveis da invisibilidade – e aumentar sua renda – por meio da arte, sensibilização, tecnologia e participação coletiva.</p>
                    <a className='text-decorator-none link-util' href="https://pimpmycarroca.com/">Pimp My Caroça</a>
                </Box>

    </Grid>
    )
}

export default LinksUteis