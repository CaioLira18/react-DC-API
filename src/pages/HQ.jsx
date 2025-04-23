import React from "react";
import { hqArray } from "../assets/database/hq";
import { useParams } from "react-router-dom";

const HQ = () => {
    
    const { id } = useParams(); // Pega o ID da URL
    const hqs = hqArray.find(hqs => hqs.id === Number(id)); // Busca o herói pelo ID
    

    

    const handleFinishOrder = () => {
      // Get current user from localStorage
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
          alert("Você precisa estar logado para salvar HQs na sua biblioteca.");
          return;
      }

      const user = JSON.parse(storedUser);
      
      // Get current user library or create if doesn't exist
      const userLibrary = JSON.parse(localStorage.getItem("userLibrary")) || {};
      
      // Initialize user's collection if it doesn't exist
      if (!userLibrary[user.email]) {
          userLibrary[user.email] = [];
      }
      
      // Check if HQ is already in the library
      const isAlreadySaved = userLibrary[user.email].some(item => item.id === hqs.id);
      
      if (isAlreadySaved) {
          alert("Esta HQ já está na sua biblioteca!");
          return;
      }
      
      // Add HQ to user's library
      userLibrary[user.email].push({
          id: hqs.id,
          name: hqs.name,
          image: hqs.image,
          autor: hqs.autor,
          ano_lancamento: hqs.ano_lancamento
      });
      
      // Save updated library back to localStorage
      localStorage.setItem("userLibrary", JSON.stringify(userLibrary));
      
      alert("HQ adicionada à sua biblioteca com sucesso!");
  };

    return (
        <div className="hero-detail">
        <img src={hqs.image} alt={hqs.name} />
        <div className="hero-text">
          <h1 className="text_title">{hqs.name}</h1>
          <h2 className="text_nome">Ano de Lançamento: {hqs.ano_lancamento}</h2>
          <h2 className="text_nome">Escritor: {hqs.autor}</h2>
          <h2 className="text_bio">{hqs.descricao}</h2>
          <button onClick={handleFinishOrder} className="btn btn-logout-edit">Baixar PDF</button>
        </div>
      </div>
    );
}

export default HQ