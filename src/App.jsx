import React from "react";
import * as Style from '../src/App.module.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import NaoEncontrada from "./NaoEncontrada";
import Header from "./Header";
import Login from "./Login";
import Produto from "./Produto";

const App = () => {
return (
  <BrowserRouter>
  <Header/>
 
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Sobre" element={<Sobre/> }/>
    <Route path="Contato" element={<Contato/> }/>
    <Route path="produto/:id" element={<Produto/> }/>
    <Route path="produto" element={<Produto/> }/>
    <Route path="*" element={<NaoEncontrada/> }/>
    <Route path="login" element={<Login/> }/>
   </Routes>
   </BrowserRouter>
)
};
 
export default App;