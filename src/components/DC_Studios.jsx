import React from "react";
import { Link } from "react-router-dom";
import logoDcStudios from '../../logo/dc_studios.png'


const DC_Studios = () => {
    return (
        <div className="dc_studios_logo">
            <Link to="/">
                <img src={logoDcStudios} alt="Logo da DC" />
            </Link>
        </div> 
    );
};

export default DC_Studios