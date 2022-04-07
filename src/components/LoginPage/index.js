import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Driven_white 1.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  return (
    <LoginPageContainer>
      <img src={logo} alt="logo" />
      <StyledInput type="email" placeholder="E-mail" />
      <StyledInput type="password" placeholder="Senha" />
      <StyledButton>Entrar</StyledButton>
      <StyledLink to="/sign-up">Não possuí uma conta? Cadastre-se</StyledLink>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0e0e13;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 134px;
    width: 299px;
    height: 49px;
    margin-bottom: 100px;
  }
`;
const StyledInput = styled.input`
  width: 298px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 16px;

  padding-left: 14px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #7e7e7e;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 298px;
  height: 52px;
  background-color: #ff4791;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 24px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;
const StyledLink = styled(Link)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #ffffff;
`;
