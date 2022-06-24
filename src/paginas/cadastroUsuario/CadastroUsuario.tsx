import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {
  let history = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id !== 0) {
        history("/login")
    }
}, [userResult])

function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
}

function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)

        toast.success("Usuário cadastrado com sucesso!", {
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
    else {
        toast.error("Senha deve ter 8 caracteres. Favor verificar as informações de cadastro.", {
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

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="imagem2">
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit} className='Formulario'>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textoscadastrar"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome e Sobrenome"
              name="nome"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              name="usuario"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              value={user.foto}
              id="foto"
              label="Link Foto de Perfil"
              name="foto"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha minimo de 8 caracteres"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              required
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha minimo de 8 caracteres"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              required
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" className='bntcadastraruser'>
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
