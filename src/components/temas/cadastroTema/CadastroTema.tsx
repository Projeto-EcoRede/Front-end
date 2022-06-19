import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, Grid } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import "./CadastroTema.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';
import { toast } from 'react-toastify';


function CadastroTema() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        topico: "",
        descricao: ""
    })

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

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string){
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                "Authorization": token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>){

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(" tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Tema atualizado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Tema cadastrado com sucesso", {
                position: "top-right",
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
        history('/tema')
    }
  
    return (
        <Grid>
<Container maxWidth="sm" >
            <form onSubmit={onSubmit} className='formTema'>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.topico} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="topico" label="topico"  name="topico" margin="normal" fullWidth />
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='finalizaTema'>
                    Finalizar
                </Button>
            </form>
        </Container>
        
        </Grid>
    )
}

export default CadastroTema;