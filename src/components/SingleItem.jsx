import React from "react";
import { Link } from "react-router-dom";


const SingleItem = ({id, name, image, banner, artist, idPath}) => {
    return (
        <Link to={`${idPath}/${id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img className="single-item__image" src={image} alt={`Imagem do Heroi ${name}`} />
                </div>
            </div>
        
            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">{name}</p>
                </div> 
            </div>

        </Link>
        
    );
}

export default SingleItem;