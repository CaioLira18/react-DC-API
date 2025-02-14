import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Heroes from './pages/Heroes';
import Jogos from './pages/Jogos'; // Corrigido
import LeiaMais from './components/LeiaMais';
import Noticias from './pages/Noticias'; // Corrigido
import Noticia from './pages/Noticia';
import Jogo from './pages/Jogo';

const App = () => {
  const location = useLocation(); // Pegando a rota atual

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Herois" element={<Heroes />} />
        <Route path="/Herois/:id" element={<Hero />} />
        <Route path="/Jogos" element={<Jogos />} /> {/* Corrigido */}
        <Route path="/Jogos/:id" element={<Jogo />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/Noticias/:id" element={<Noticia />} />
      </Routes>

      {/* Exibir LeiaMais apenas na página de Notícias */}
      {location.pathname.startsWith("/Noticias") && <LeiaMais />}

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
