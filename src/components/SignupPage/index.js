import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dataToSignup = {
    email: email,
	name: name,
	cpf: cpf,
	password: password
  }
  function createAccount (){
      const request = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", dataToSignup);
      request.then((succes)=>{
          console.log(succes);
          navigate("/");
      });
      request.catch((problem)=>{
        console.log(problem.response);
        alert(`Isso não funcionou. ${problem.response.data.message}`)
      });
  }

  return (
    <SignupPageContainer>
      <StyledInput type="text" placeholder="Nome" onChange={event => setName(event.target.value)}/>
      <StyledInput type="text" placeholder="CPF" onChange={event => setCpf(event.target.value)}/>
      <StyledInput type="text" placeholder="E-mail" onChange={event => setEmail(event.target.value)}/>
      <StyledInput type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
      <StyledButton onClick={()=>{createAccount()}}>CADASTRAR</StyledButton>
      <StyledLink to="/">Já possuí uma conta? Entre</StyledLink>
    </SignupPageContainer>
  );
}

const SignupPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0e0e13;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 147px;
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
