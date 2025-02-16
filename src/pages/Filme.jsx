import React from "react";
import { filmesArray } from "../assets/database/filmes";
import { useParams } from "react-router-dom";

const Filme = () => {
    
    const { id } = useParams(); // Pega o ID da URL
    const filmes = filmesArray.find(filmes => filmes.id === Number(id)); // Busca o herói pelo ID

    return (
        <div className="filmes-detail">
        <img src={filmes.image} alt={filmes.name} />
        <div className="filmes-text">
          <h1 className="text_title">{filmes.name}</h1>
          <h2 className="text_nome">Ano de Lançamento: {filmes.ano_lancamento}</h2>
          <h2 className="text_nome">Escritor: {filmes.escritor}</h2>
          <h2 className="text_nome">Genero: {filmes.genero}</h2>
          <h2 className="text_bio">Descrição: {filmes.descricao}</h2>
        </div>
      </div>
    );
}

export default Filme