import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoDC from '../../logo/dc-logo.png';
import { User, LogOut } from 'lucide-react';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate(); // Usando useNavigate para navegação sem reload

    // Função para verificar o status de autenticação
    const checkAuthStatus = () => {
        const token = localStorage.getItem("token");
        if (token) {
            // Se o token existir, o usuário está autenticado
            setIsAuthenticated(true);

            // Pode ser interessante decodificar o token para pegar o e-mail (usando alguma lib como jwt-decode)
            const decoded = JSON.parse(atob(token.split('.')[1]));
            setUserEmail(decoded.email); // Definindo o e-mail do usuário
        } else {
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuthStatus();
        
        // Para ouvir mudanças no localStorage de outro lugar da aplicação
        window.addEventListener('storage', checkAuthStatus);

        // Verificar a cada 2 segundos
        const interval = setInterval(checkAuthStatus, 2000);
        
        return () => {
            window.removeEventListener('storage', checkAuthStatus);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remover o token
        setIsAuthenticated(false); // Atualizar o estado local
        setUserEmail(""); // Limpar o e-mail do usuário
        navigate("/"); // Redirecionar para a página inicial sem recarregar
    };

    return (
        <div className="header">
            <Link to="/">
                <img src={logoDC} alt="Logo DC" />
            </Link>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Herois">Heróis</a></li>
                <li><a href="/Viloes">Vilões</a></li>
                <li><a href="/Filmes">DC Studios</a></li>
                <li><a href="/Noticias">Noticias</a></li>
                <li><a href="/HQs">HQs</a></li> 

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
                            onClick={handleLogout}>
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

export default Header;
