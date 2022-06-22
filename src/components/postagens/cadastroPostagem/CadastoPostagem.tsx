import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import './CadastroPostagem.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';
import { toast } from 'react-toastify'



function CadastroPostagem() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()
    const [temas, setTemas] = useState<Tema[]>([])


    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens);

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
    const [tema, setTema] = useState<Tema>({
        id: 0,
        topico: '',
        descricao: ''
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        midia: '',
        data: '',
        regioes: '',
        curtir: 0,
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTema()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            await put(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {

            await post(`/postagem`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso!', {
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
        back()
    }

    function back() {
        history('/postagem')
    }

    return (   
        <Container  maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} className='formpostagem'>
                <Typography variant="h3" component="h2" >Nova Postagem</Typography>
                <TextField
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="titulo" label="Título"
                    name="titulo" margin="normal" fullWidth
                />

                <TextField
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="texto" label="Texto" name="texto"
                    margin="normal" fullWidth
                />
                <TextField
                    value={postagem.midia}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="midia" label="Link Mídia" name="midia"
                    margin="normal" fullWidth />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Regiões</FormLabel>
                    <RadioGroup aria-label="gender" name="regioes" value={postagem.regioes} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}>
                        <FormControlLabel value="Zona Norte" control={<Radio className='colorratio' />} label="Zona Norte" />
                        <FormControlLabel value="Zona Leste" control={<Radio />} label="Zona Leste" />
                        <FormControlLabel value="Zona Oeste" control={<Radio />} label="Zona Oeste" />
                        <FormControlLabel value="Zona Sul" control={<Radio />} label="Zona Sul" />
                        <FormControlLabel value="ABCD" control={<Radio />} label="ABCD" />
                    </RadioGroup>
                </FormControl>
                <FormControl className='topicoTema'>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"

                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}
                    >

                        {
                            temas.map(item => (
                                <MenuItem value={item.id}>{item.topico}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha um topico para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" className='finalizaPost'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPostagem;