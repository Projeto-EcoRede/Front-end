import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Typography, Box, Grid } from "@mui/material";
import "./Footer.css";
import GitHub from "@material-ui/icons/GitHub";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens);
        
        var footerComponent;
        if(token !== ""){
            footerComponent=
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Entre em contato com a gente </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Projeto-EcoRede" target="_blank">
                            <GitHubIcon style={{ fontSize: 60, color: "white" }} className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <InstagramIcon style={{ fontSize: 60, color: "white" }} className='redes' />
                            </a>
                            <a href="mailto:projetoecorede@gmail.com"  target="_blank">
                            <EmailIcon style={{ fontSize: 60, color: "white" }} className='redes' />
                            </a> 
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© Todos os Direitos Reservados Copyright:</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Projeto Eco Rede</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        }
    return (
        <>
        {footerComponent}
        </>
    )
    }
export default Footer;
