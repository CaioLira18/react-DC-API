import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsArray } from "../assets/database/news";

const Noticia = () => {
    const { id } = useParams(); // Pega o ID da URL
    const news = newsArray.find(news => news.id === parseInt(id, 10));


    return (
        <div className="news_content">
             <h1 className="news_title">{news.titulo}</h1>
             <p className="news_date">{news.data}</p>
             <h2 className="news_content">{news.content}</h2>
             <img src={news.image} alt="" />
        </div>
       
    );
};

export default Noticia;