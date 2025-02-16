import React from "react";
import { Link } from "react-router-dom";
import logoDC  from '../../logo/dc-logo-white.png';
import logoDcStudios from '../../logo/dc_studios.png'


const DC_Studios = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="dc_studios_logo" src={logoDcStudios} alt="Logo do Spotify" />
            </Link>
        </div> 
    );
};

export default DC_Studios