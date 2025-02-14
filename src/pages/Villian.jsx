import React from "react";
import { useParams } from "react-router-dom";
import { villainsArray } from "../assets/database/villains";

const Villian = () => {
    const { id } = useParams(); // Pega o ID da URL
    const villian = villainsArray.find(villian => villian.id === Number(id)); // Busca o herói pelo ID


    return (
        <div className="hero-detail">
        <img src={villian.foto} alt={villian.name} />
        <div className="hero-text">
          <h1 className="text_title">{villian.name}</h1>
          <h2 className="text_nome">Nome Verdadeiro: {villian.true_name}</h2>
          <h2 className="text_nome">Criação: {villian.criacao}</h2>
          <h2 className="text_nome">Primeira Aparição: {villian.primeira_aparicao}</h2>
          <h2 className="text_nome">Criação: {villian.criacao}</h2>
          <h2 className="text_nome">Identidade Secreta: {villian.identidade}</h2>
          <h1 className="text_title">Biografia:</h1>
          <h2 className="text_bio">{villian.bio}</h2>
        </div>
      </div>
      
    );
};

export default Villian;
