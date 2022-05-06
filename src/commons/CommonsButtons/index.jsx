import React from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';



export function HomeButton(){
    const navegacao = useNavigate();

    const goHome = () =>{
        navegacao('/', {replace:true});
    }

    return(
        <IconButton onClick={goHome}><HomeIcon/></IconButton>
    );
}