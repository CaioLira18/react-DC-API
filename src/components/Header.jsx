import {React, useState, useEffect} from "react";
import logoDC from '../../logo/dc-logo.png';
import { Link } from "react-router-dom";
import { User, LogOut } from 'lucide-react'; // Assumindo que você está usando lucide-react


const Header = (handleLogout) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [userEmail, setUserEmail] = useState("");
    
        const checkAuthStatus = () => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    console.log("Status de autenticação:", parsedUser);
                    setIsAuthenticated(parsedUser.authenticated === true);
                    setUserEmail(parsedUser.email || "");
                } catch (error) {
                    console.error("Erro ao analisar usuário do localStorage:", error);
                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(false);
            }
        }

        // Verificar status de autenticação quando o componente for montado
    useEffect(() => {
        checkAuthStatus();
        
        window.addEventListener('storage', checkAuthStatus);
        
        
        const interval = setInterval(checkAuthStatus, 2000);
        
        
        return () => {
            window.removeEventListener('storage', checkAuthStatus);
            clearInterval(interval);
        };
    }, []);

     

    return (
    <div className="header">
        <Link to="/">
        <img src={logoDC} alt="Logo do Spotify" />
        </Link>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Herois">Herois</a></li>
            <li><a href="/Viloes">Viloes</a></li>
            <li><a href="/">DC Studios</a></li>
            <li><a href="/">HQs</a></li> 

            {!isAuthenticated ? (
                    <a className="cta" href="/Profile">
                        <User />
                        <span>Login</span>
                    </a>
                    ) : (
                    <div className="user-section">
                        <a className="cta" href="/Profile">
                        <User />
                        <span>{userEmail.split('@')[0]}</span>
                        </a>
                        <button
                        className="cta logout-btn"
                        onClick={() => {
                            localStorage.removeItem("user");
                            window.location.href = "/";
                        }}>
                            <hr />
                            <LogOut />
                            <span>Sair</span>  
                        </button>
                    </div>
                )}
        </ul>
    </div>
    );
};

export default Header