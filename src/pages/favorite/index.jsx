import { Box } from '@mui/material';
import React, { useContext } from 'react';
import Header from '../../commons/cabecalho';
import { UsuarioContext} from '../../commons/contexts/Usuario';
import Footer from '../../commons/rodape';
import './stylefav.css';


export default function Favoritos(){

    const {favRepos, setFavRepos, dataGitHub} = useContext(UsuarioContext)

    const buscarDados = () =>{
     return fetch(`https://api.github.com/users/${dataGitHub.login}/starred`)
        .then((response) => response.json())
        .then((data) => setFavRepos(data))
    }

    const validacaoFavRepos = () =>{
        buscarDados();
        return(
            exibirFavRepos()
        );   
    }

    const exibirFavRepos =() =>{
        return(
            favRepos.map((favRepos) => {
                return(
                    <>
                    <Box className='CaixaRepos'>
                        <a className='linkfavrep' href={favRepos.html_url}>{favRepos.name}</a>
                    </Box>
                    </> 
                );
            })
        );
    }

    return(
        <>
            <Header />
                <h1 className='text'>Essa pagina exibira os Repositorios favoritos do Usuario !!</h1>
                <div className='alinhamento'>
                    <button className='botaofav alinhamento' onClick={validacaoFavRepos}>Pressione aqui para ver os repositorios favoritados do usuario</button>
                </div>
                <article className='favrep'>
                    {exibirFavRepos()}
                </article>
            <Footer />
        </>
    );
}