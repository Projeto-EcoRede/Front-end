import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem'
import PerfilUsuario from '../../components/postagens/perfilUser/PerfilUsuario'

export default function Feed() {
  return (
    <Grid container>
        <Grid item md={3}>
          <PerfilUsuario />
        </Grid>
        <Grid item md={9}>
            <ListaPostagem />
        </Grid>
    </Grid>
  )
}
