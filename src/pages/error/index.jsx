import React from 'react';
import Header from '../../commons/cabecalho';
import Footer from '../../commons/rodape';
import "./StyleError.css";

export default function ErrorPage(){
    return(
        <>
            <Header/>
                <h1 className='Titulo'>O Usuario Digitado não foi localizado no GitHub</h1>
                <br></br>
                <h1 className='Titulo'>Aperte no botão de home para voltar para a pagina principal e tentar novamente !!</h1>
            <Footer/>
        </>
    );
}