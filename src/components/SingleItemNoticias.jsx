import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link, useParams } from "react-router-dom";
import { newsArray } from "../assets/database/news";


const SingleItemNoticias = ({ id, titulo, image, banner, artist, idPath }) => { 
    return (
       
            <div className="container">

                        <div className="noticia-container">
                            <div className="single-item-jogos__div-image">
                            <div className="noticia">
                                <img className="single-item-jogos__image" src={image} alt="Novo God of War" />
                                
                                <Link to={`${idPath}/${id}`}>{titulo}</Link> 
                            </div>
                            </div>
                        </div>
                    </div>
  
    );
}


export default SingleItemNoticias;