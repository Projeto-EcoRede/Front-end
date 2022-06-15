import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/token/tokensReducer'

import User from '../../../models/User'
import { buscaId } from '../../../services/Service'

import './PerfilUsuario.css'

function PerfilUsuario() {

    let history = useNavigate()

     // Pega o ID guardado no Store
     const id = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );
     // Pega o Token guardado no Store
     const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])
    
    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={ user.nome} />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                </Box>

            
            </Box>
        </Box>
    )
}

export default PerfilUsuario