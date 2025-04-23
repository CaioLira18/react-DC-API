import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Heroes from './pages/Heroes';
import Jogos from './pages/Jogos'; // Corrigido
import Noticias from './pages/Noticias'; // Corrigido
import Noticia from './pages/Noticia';
import Jogo from './pages/Jogo';
import Villans from './pages/Villans';
import Villian from './pages/Villian';
import HQ from './pages/HQ';
import HQs from './pages/HQs';
import Filme from './pages/Filme';
import Filmes from './pages/Filmes';
import Profile from './components/Profile';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import AvatarChoice from './pages/AvatarChoice';

const App = () => {
  const location = useLocation(); // Pegando a rota atual

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Herois" element={<Heroes />} />
        <Route path="/Herois/:id" element={<Hero />} />
        <Route path="/Jogos" element={<Jogos />} /> 
        <Route path="/Jogos/:id" element={<Jogo />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/Noticias/:id" element={<Noticia />} />
        <Route path="/Viloes" element={<Villans />} />
        <Route path="/Viloes/:id" element={<Villian />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AvatarChoice" element={<AvatarChoice />} />
        <Route path="/HQs" element={<HQs />} />
        <Route path="/EditarPerfil" element={<EditProfile />} />
        <Route path="/HQs/:id" element={<HQ />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Filmes/:id" element={<Filme />} />
      </Routes>
  

      <Footer />
    </div>
  );
};

// Envolve tudo corretamente no BrowserRouter
const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
