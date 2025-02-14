import React from "react";
import logoDC from '../assets/logo/dc-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (

    <div className="header">
        <Link to="/">
        <img src={logoDC} alt="Logo do Spotify" />
        </Link>
    </div>
    );
};

export default Header