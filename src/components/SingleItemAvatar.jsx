import React from "react";
import { Link } from "react-router-dom";

const SingleItemAvatar = ({image, id, idPath}) => {
    return (
        <div className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img 
                        className="single-item__image" 
                        src={image} 
                        alt={`Avatar ${id}`} 
                    />
                </div>
            </div>
        </div>  
    );
}

export default SingleItemAvatar;