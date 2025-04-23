import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import mulherMaravilha from '../../imagens_herois/MulherMaravilha.png';

const Profile = () => {
    // Estados para armazenar as informações do usuário
    const [userEmail, setUserEmail] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userLibrary, setUserLibrary] = useState([]);
    
    // useEffect para carregar os dados do usuário do localStorage quando o componente montar
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserEmail(parsedUser.email || "");
                setIsAuthenticated(parsedUser.authenticated || false);
                console.log("Dados do usuário carregados:", parsedUser);
                if (parsedUser.authenticated) {
                    loadUserLibrary(parsedUser.email);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do usuário:", error);
            }
        } else {
            console.log("Nenhum usuário encontrado no localStorage");
        }
    }, []);

    const loadUserLibrary = (email) => {
        try {
            const libraryData = JSON.parse(localStorage.getItem("userLibrary")) || {};
            const userHQs = libraryData[email] || [];
            setUserLibrary(userHQs);
            console.log("Biblioteca carregada:", userHQs);
        } catch (error) {
            console.error("Erro ao carregar biblioteca de HQs:", error);
            setUserLibrary([]);
        }
    };
    
    // Se não houver usuário autenticado, mostrar uma mensagem
    if (!isAuthenticated) {
        return (
            <div className="profile-container not-authenticated">
                <h2>Você não está logado</h2>
                <p>Por favor, faça login para acessar seu perfil.</p>
                <a href="/login" className="login-link">
                    Ir para login
                </a>
            </div>
        );
    }
    
    // Renderizar o perfil do usuário
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="image-profile-edit">
                    <img src={mulherMaravilha} alt="" />
                </div>
                <div className="profile-info">
                    <h2>Perfil do Usuário</h2>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Status:</strong> {isAuthenticated ? "Autenticado" : "Não autenticado"}</p>
                </div>
            </div>
            
            <div className="profile-details">
                <h3>Detalhes da Conta</h3>
                <p>Bem-vindo ao seu perfil, {userEmail.split('@')[0]}!</p>
                <p>Aqui você pode gerenciar suas informações e preferências.</p>
                
                <div className="profile-actions">
                    <button
                        className="btn btn-logout"
                        onClick={() => {
                            localStorage.removeItem("user");
                            window.location.href = "/";
                        }}
                    >
                        Sair da Conta
                    </button>
                    <Link to={`/EditarPerfil`} className="btn btn-edit">
                        Editar Perfil
                    </Link>
                </div>
            </div>
            
            <div className="biblioteca">
                <h1>Sua Biblioteca de HQs</h1>
                
                {userLibrary.length === 0 ? (
                    <p>Você ainda não adicionou nenhuma HQ à sua biblioteca.</p>
                ) : (
                    <div className="library-grid">
                        {userLibrary.map((hq) => (
                            <div key={hq.id} className="library-item">
                                <img src={hq.image} alt={hq.name} />
                                <div className="library-item-info">
                                    <h3>{hq.name}</h3>
                                    <p>Autor: {hq.autor}</p>
                                    <p>Ano: {hq.ano_lancamento}</p>
                                    <Link to={`/hq/${hq.id}`} className="btn btn-view">
                                        Ver HQ
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Profile;