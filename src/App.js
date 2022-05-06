import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {UsuarioProvider } from './commons/contexts/Usuario';
import ErrorPage from './pages/error';
import Favoritos from './pages/favorite';
import PesquisaUsuario from './pages/search';
import ListasUsuario from './pages/user';


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<UsuarioProvider><PesquisaUsuario/></UsuarioProvider>}/>
              <Route path='/listas' element={<UsuarioProvider><ListasUsuario /></UsuarioProvider>} />
              <Route path='/fav' element={<UsuarioProvider><Favoritos/></UsuarioProvider>}/>
              <Route path='/error' element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
