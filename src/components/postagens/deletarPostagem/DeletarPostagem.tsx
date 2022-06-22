import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import "./DeletarPostagem.css"
import Postagem from '../../../models/Postagem';
import {toast} from 'react-toastify'
import { TokenState } from '../../../store/token/tokensReducer';


function DeletarPostagem() {

    let history = useNavigate();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [postagem, setPostagem] = useState<Postagem>()

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado!', {
                position: "top-center",
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history('/postagem')

        try {
            await deleteId(`/postagem/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            
            toast.success('Postagem deletada com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
              });    
        } catch (error) {
            toast.error('Erro ao deletar postagem!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
              });
            }

    }

    function nao() {
        history('/postagem')
    }

    return (
        <>
            <Box m={10} className='justifyDelPost'>
                <Card variant="outlined" className='boxDelPost'>
                    <CardContent >
                        <Box >
                            <Typography color="textPrimary" className='desejaDEL' gutterBottom>
                                Deseja deletar a Postagem?                            </Typography>
                            <Typography color="textPrimary">
                                { postagem?.titulo }
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display="flex" justifyContent="center" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="delPostS" size='large' >
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' className="delPostN">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>
            </Box>
        </>
    )
}

export default DeletarPostagem;
