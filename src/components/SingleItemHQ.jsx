import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link, useParams } from "react-router-dom";
import logoDC from '../assets/logo/dc-logo.png';



const SingleItemHQ = ({ id, name, image, banner, artist, idPath }) => { 
    return (
       
            <div className="container">
                <div className="HQ-container">
                    <div className="single-item-HQ__div-image">
                        <div className="HQ">
                            <img className="single-item-HQ__image" src={image} alt="Novo God of War" />  
                            <Link to={`${idPath}/${id}`}>{name}</Link> 
                        </div>
                    </div>
                </div>
            </div>
  
    );
}


export default SingleItemHQ;