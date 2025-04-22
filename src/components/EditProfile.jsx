import React, { useEffect, useState } from "react";
import { User, Edit } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";


const EditProfile = () => {

    // Estados para armazenar as informações do usuário
        const [userEmail, setUserEmail] = useState("");
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const API_URL = import.meta.env.VITE_API_URL || "https://testserver-production-eca2.up.railway.app";

        
        // useEffect para carregar os dados do usuário do localStorage quando o componente montar
        useEffect(() => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUserEmail(parsedUser.email || "");
                    setIsAuthenticated(parsedUser.authenticated || false);
                    console.log("Dados do usuário carregados:", parsedUser);
                } catch (error) {
                    console.error("Erro ao carregar dados do usuário:", error);
                }
            } else {
                console.log("Nenhum usuário encontrado no localStorage");
                // Opcionalmente redirecionar para a página de login
                // window.location.href = "/login";
            }
        }, []);
        
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

        
        const validationLogin = yup.object().shape({
            email: yup.string().email("Email inválido").required("Campo obrigatório"),
            password: yup.string().min(8, "Mínimo 8 caracteres").required("Campo obrigatório"),
        });

        const handleUpdateEmail = async (values) => {
            const token = localStorage.getItem("token"); // <- pega o token salvo
            if (!token) {
              alert("Você não está autenticado.");
              return;
            }
          
            try {
              const response = await Axios.post(
                `${API_URL}/update-email`,
                values,
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
          
              if (response.data.success) {
                const updatedUser = { email: values.newEmail, authenticated: true };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setUserEmail(values.newEmail);
                alert(response.data.msg);
              } else {
                alert(response.data.msg || "Erro ao atualizar o e-mail");
              }
            } catch (error) {
              console.error("Erro ao atualizar o e-mail:", error);
              alert("Erro ao atualizar o e-mail: " + (error.response?.data?.msg || error.message));
            }
        
        };
          
          
           
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-avatar">
                    <User size={50} color="white" />
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
                <Formik
                initialValues={{ email: userEmail, newEmail: "", password: ""  }}
                onSubmit={handleUpdateEmail}
                validationSchema={validationLogin}
                >
                <Form className="login-form">
                    <div className="login-form-group">
                    <Field
                        name="newEmail"
                        className="form-field-edit"
                        placeholder={userEmail}
                    />
                    <ErrorMessage component="span" name="newEmail" className="form-error" />
                    </div>

                    <div className="login-form-group">
                    <Field
                        type="password"
                        name="password"
                        className="form-field-edit"
                        placeholder="Senha"
                    />
                    <ErrorMessage component="span" name="password" className="form-error" />
                    </div>

                    <button className="login-button-edit" type="submit">ALTERAR</button>
                </Form>
                </Formik>


             
                <div className="profile-actions">
                    <button
                        className="btn btn-logout-edit"
                        onClick={() => {
                            localStorage.removeItem("user");
                            window.location.href = "/";
                        }}
                    >
                        Sair da Conta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile