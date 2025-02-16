import React from "react";
import { Link } from "react-router-dom";
import logoDC  from '../../logo/dc-logo-white.png';
import logoWarner from '../../logo/warner-white.png'


const Footer = () => {
    return (
    <footer className="footer">
        <div class="footer-content">
            <p>&copy; 2025 DC Comics. Todos os direitos reservados.</p>
        </div>
        <div className="footer-content-img">
        <img className="logo_footer" width="30px" src={logoDC} alt="" />
        <img className="logo_footer" width="30px" src={logoWarner} alt="" />

        </div>
    </footer>
    
    );
};

export default Footer