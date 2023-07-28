import React from 'react';
import './App.css';
import Home from './pages/home';
import {Route, Routes} from "react-router-dom"
import CreateAccount from './pages/createAccount';
import AplicativoPokemon from './pages/aplicativoPokemon';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/create-account' element = {<CreateAccount />}/>
    <Route path='/aplicativo-pokemon' element = {<AplicativoPokemon />} />
    </Routes>
    </>
  );
}

export default App;
