import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem'
import PerfilUsuario from '../../components/postagens/perfilUser/PerfilUsuario'
import { busca } from '../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/token/tokensReducer';
import { toast } from 'react-toastify';
import Postagem from '../../models/Postagem'

export default function Feed() {
  const [feed, setFeed] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa está logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    async function getFeed() {
        await busca("/feed", setFeed, {
            headers: {
                "Authorization": token
            }  
        })
    }

    useEffect(() => {
        getFeed()
    }, [feed.length])
  return (
    <>    
    <Grid container>
        <Grid item md={3} className='perfiluser'>
          <PerfilUsuario />
        </Grid>
        <Grid item md={9}>
            <ListaPostagem />
        </Grid>
    </Grid>
    </>
  )
}
