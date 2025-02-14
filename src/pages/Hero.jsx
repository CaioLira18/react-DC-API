import React from "react";
import { useParams } from "react-router-dom";
import { heroesArray } from "../assets/database/heroes";

const Hero = () => {
    const { id } = useParams(); // Pega o ID da URL
    const hero = heroesArray.find(hero => hero.id === Number(id)); // Busca o herói pelo ID


    return (
        <div className="hero-detail">
        <img src={hero.foto} alt={hero.name} />
        <div className="hero-text">
          <h1 className="text_title">{hero.name}</h1>
          <h2 className="text_nome">Nome Verdadeiro: {hero.true_name}</h2>
          <h2 className="text_nome">Criação: {hero.criacao}</h2>
          <h2 className="text_nome">Primeira Aparição: {hero.primeira_aparicao}</h2>
          <h2 className="text_nome">Criação: {hero.criacao}</h2>
          <h2 className="text_nome">Identidade Secreta: {hero.identidade}</h2>
          <h1 className="text_title">Biografia:</h1>
          <h2 className="text_bio">{hero.bio}</h2>
        </div>
      </div>
      
    );
};

export default Hero;
