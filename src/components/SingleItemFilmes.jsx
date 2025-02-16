import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link, useParams } from "react-router-dom";
import logoDC from '../../logo/dc-logo.png';



const SingleItemFilmes = ({ id, name, image, banner, artist, idPath }) => { 
    return (
       
            <div className="container">
                <div className="Filmes-container">
                    <div className="single-item-Filmes__div-image">
                        <div className="Filmes">
                            <img className="single-item-Filmes__image" src={image} alt="Novo God of War" />  
                            <Link to={`${idPath}/${id}`}>{name}</Link> 
                        </div>
                    </div>
                </div>
            </div>
  
    );
}


export default SingleItemFilmes;