import React, { useContext } from "react"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import SubscriptionContext from "../../contexts/SubscriptionContext";

export default function HomePage () {
    const {loginResponse, setLoginResponse} = useContext(UserContext);
    const {subscribeResponse, setSubscribeResponse} = useContext(SubscriptionContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    }

    return(
        <Container>
            <StyledTopo><StyledImg src={subscribeResponse.image}/></StyledTopo>
            <StyledCumprimento>Olá, {loginResponse.name}</StyledCumprimento>

            {subscribeResponse.perks.map(item =>
            <StyledAnchor  href={item.link} target="_blank"><p>{item.title}</p></StyledAnchor>
            )}

            <StyledLink to="/subscriptions"><p>Mudar plano</p></StyledLink>
            <StyledButton onClick={handleDelete}>Cancelar plano</StyledButton>

        </Container>

    )
    

    function handleDelete(){

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config);

        promise.then(tratarSucesso);
        promise.catch(tratarErro);

        function tratarSucesso (sucesso){
            console.log(sucesso);
            navigate('/subscriptions')
        }

        function tratarErro (falha){
            console.log(falha.response)
            alert(`Falha na exclusão`)
        }  
    }
}


const Container = styled.div`
	width: 100%;
	background: #0E0E13;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

const StyledAnchor = styled.a`
    margin-top: 8px;
    margin-bottom: 24px;
    width: 299px;
    height: 52px;
    border-radius: 8px;
    background-color: #FF4791;
    font-family: Roboto;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
`;
const StyledCumprimento = styled.div`
    margin-bottom: 53px;
    font-family: Roboto;
    font-weight: Bold;
    font-size: 24px;
    color: white;
`;
const StyledImg = styled.img`
    width: 74.52px;
    height: 50.87px;
`
const StyledTopo = styled.div`
    width: 299px;
    margin-bottom:12.13px;
`
const StyledLink = styled(Link)`
    margin-top: 8px;
    margin-bottom: 24px;
    width: 299px;
    height: 52px;
    border-radius: 8px;
    background-color: #FF4791;
    font-family: Roboto;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const StyledButton = styled.button`
    margin-top: 8px;
    margin-bottom: 24px;
    width: 299px;
    height: 52px;
    border-radius: 8px;
    background-color: #FF4747;
`;