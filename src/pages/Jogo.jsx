import React from "react";
import { useParams } from "react-router-dom";
import { jogosArray } from "../assets/database/games";


const Jogo = () => {
    const { id } = useParams(); // Pega o ID da URL
    const jogo = jogosArray.find(jogo => jogo.id === Number(id)); // Busca o herói pelo ID


    return (
        <div className="jogo-detail">
        <img className="image_game" src={jogo.image} alt={jogo.name} />
        <div className="jogo-text">
          <h1 className="text_title">{jogo.name}</h1>
          <h2 className="text_nome"><strong>Ano de Lançamento:</strong> {jogo.ano_lancamento}</h2>
          <h2 className="text_nome">Platafromas: {jogo.plataforms}</h2>
          <h2 className="text_nome">Genero: {jogo.genero}</h2>
          <h2 className="text_nome">Descrição: {jogo.descricao}</h2>
          <h1 className="text_title">Desenvolvedora:</h1>
          <img className="logo_empresa" src={jogo.desenvolvedora_icon} alt="" />
        </div>
      </div>
      
    );
};

export default Jogo