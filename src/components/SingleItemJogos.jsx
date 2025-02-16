import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link } from "react-router-dom";
import logoDC from '../../logo/dc-logo.png';


const SingleItemJogos = ({ id, name, image, banner, artist, idPath }) => {
    return (
        <Link to={`${idPath}/${id}`} className="single-item-jogos">
            <div className="single-item-jogos__div-image">
                <img className="single-item-jogos__image" src={image} alt={`Imagem do Heroi ${name}`} />
            </div>
            <FontAwesomeIcon className="single-item-jogos__icon" icon={logoDC} />
            <div className="single-item-jogos__texts">
                <div className="single-item-jogos__2lines">
                    <p className="single-item-jogos__title">{name}</p>
                    <p className="single-item-jogos__title">{artist}</p>
                </div>
            </div>
        </Link>
    );
}


export default SingleItemJogos;