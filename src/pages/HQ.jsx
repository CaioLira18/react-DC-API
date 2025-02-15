import React from "react";
import { hqArray } from "../assets/database/hq";
import { useParams } from "react-router-dom";

const HQ = () => {
    
    const { id } = useParams(); // Pega o ID da URL
    const hqs = hqArray.find(hqs => hqs.id === Number(id)); // Busca o herói pelo ID

    return (
        <div className="hero-detail">
        <img src={hqs.image} alt={hqs.name} />
        <div className="hero-text">
          <h1 className="text_title">{hqs.name}</h1>
          <h2 className="text_nome">Ano de Lançamento: {hqs.ano_lancamento}</h2>
          <h2 className="text_nome">Escritor: {hqs.autor}</h2>
          <h2 className="text_bio">{hqs.descricao}</h2>
        </div>
      </div>
    );
}

export default HQ