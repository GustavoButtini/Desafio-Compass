import React from 'react';
import Header from '../../commons/cabecalho';
import Footer from '../../commons/rodape';
import { UsuarioContext } from '../../commons/contexts/Usuario';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleuser.css'
import { Box } from '@mui/material';



export default function ListasUsuario(){

    const navegação = useNavigate();
    const {repos,setRepos,dataGitHub} = useContext(UsuarioContext);
    

    const proximapagina = () =>{
        navegação('/fav', {replace:true});
    }
    
    const buscarRepositorios = () =>{
       return  fetch(` https://api.github.com/users/${dataGitHub.login}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));
    }

    const verificarConta = () =>{
        buscarRepositorios();
        return( 
            mostrarRepositorios()
        );

    }

    const mostrarRepositorios = () => {
        return(
            repos.map((repos) => {
                return(
                    <>
                      <Box className='CaixaRepos'><a className='linkrepos' href={repos.html_url}>{repos.name}</a></Box>
                    </> 
                );
            })
        );
    }
    
    return(
        <>
        <Header/>
        <article>
            <h2 className='titulo'> Essa pagina exibira as listas do usuario !!</h2>
            <div className='alinhamentobotao'>
                <button className='button'onClick={verificarConta}>Pressione aqui para ver os Repositorios do Usuario</button> <button className='botao_proximapagina' onClick={proximapagina}>Pressione aqui para ir ao Repositorios Favoritos</button>
            </div>
            <article>
                {mostrarRepositorios()}
            </article>
        </article>
        <Footer/>
        </>
    );
}
