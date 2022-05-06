import React from 'react';
import { HomeButton } from '../CommonsButtons';
import './style.css';


function Header(){    
    return(
        <header className='cabecalho'>
            <h1 className='titulo'> <HomeButton className='botaohome'/>Bem Vindo ao nosso site !</h1>
        </header>
    );
}

export default Header