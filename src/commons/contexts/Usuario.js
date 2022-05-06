import React, { useState,createContext } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) =>{
    const [dataGitHub, setDataGitHub] = useState([]);
    const [usuarioGitHub, setUsuarioGitHub] = useState("");
    const [repos,setRepos] = useState([]);
    const  [favRepos, setFavRepos] = useState([]);
    return(
        <UsuarioContext.Provider value={{dataGitHub,setDataGitHub,usuarioGitHub,setUsuarioGitHub,repos,setRepos,favRepos,setFavRepos}}>
            {children}
        </UsuarioContext.Provider>
    );
}