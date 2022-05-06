import React, { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Header from "../../commons/cabecalho";
import { UsuarioContext } from "../../commons/contexts/Usuario";
import Footer from "../../commons/rodape";

var canGo = false;
export default function PesquisaUsuario() {
  const navegação = useNavigate();
  const { dataGitHub, setDataGitHub, usuarioGitHub, setUsuarioGitHub } =
    useContext(UsuarioContext);

  const nextPage = () => {
    if (canGo === true) {
      navegação("/listas  ", { replace: true });
    } else {
      navegação("/error", {replace:true});
    }
  };
  const buscarData = () => {
    return fetch(`https://api.github.com/users/${usuarioGitHub}`)
      .then((response) => response.json())
      .then((data) => setDataGitHub(data));
  };

  const EnviarData = () => {
    if (usuarioGitHub !== "" || usuarioGitHub !== undefined) {
      return (
        buscarData(),
        (canGo = true)
      );
    } else {
      return (
      (canGo = false),
      navegação("/error",{replace:true})
      );
    }
  };
  return (
    <>
      <Header />
      <article>
        <h1 className="titulo">
          Essa pagina irá mostrar uma pesquisa por um usuario do Site GitHub
        </h1>
        <input
          type="text"
          className="input"
          name="username"
          onChange={(e) => setUsuarioGitHub(e.target.value)}
          placeholder="Insira o usuario"
        ></input>
        <button onClick={EnviarData} className="botao">
          {" "}
          Buscar Usuario
        </button>
      </article>

      <article onClick={nextPage} className="usuarioGitHub">
        <h3 className="titulo">
          Esse foi o usuario encontrado, pressione nesse texto ou na foto do
          usuario para ir aos seus dados:
        </h3>
        <img
          alt=""
          src={dataGitHub.avatar_url}
          className="imageGitUser"
          width="100"
          height="100"
        />
        <p>{dataGitHub.login}</p>
      </article>
      <Footer />
    </>
  );
}
