import axios from "axios";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useState } from "react";
import styled from "styled-components";

export default function SubscriptionPage(){
    const [subscriptionResponse, setSubscriptionResponse] = useState([]);
    const [cardName, setCardName] =useState([]);
    const [cardNumber,setCardNumber]=useState([]);
    const [securityNumber,setSecurityNumber]=useState([]);
    const [expirationDate, setExpirationDate] =useState([]);
    const  parameter   = useParams();
    const {loginResponse, setLoginResponse} = useContext(UserContext);
    const [modal, setModal]=useState("none");

    const navigate = useNavigate();
    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    };
    const dataToSubscribe = {
        membershipId: parameter.ID_DO_PLANO,
        cardName: cardName,
        cardNumber: cardNumber,
        securityNumber:securityNumber,
        expirationDate: expirationDate
  }
    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${parameter.ID_DO_PLANO}`,config);
        request.then((success)=>{
            console.log(success.data);
            setSubscriptionResponse(success.data);
        });
        request.catch((problem)=>{
            console.log(problem);
        });
	}, []);
    console.log(subscriptionResponse);


    function subscribeTo(){
        const request = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", dataToSubscribe, config);
        request.then((success)=>{
            console.log(success);
            navigate("/home");
        });
        request.catch((problem)=>{
            console.log(problem.response);
            alert(`Isso não funcionou. ${problem.response.data.message}`)
        });
    }

    return(
        <SubscriptionContainer>
            <BackArrowDiv>
                <ion-icon name="arrow-back-outline" onClick={()=>navigate("/subscriptions")}></ion-icon>

            </BackArrowDiv>
            <img src={subscriptionResponse.image} alt="logo"/>
            <Title>{subscriptionResponse.name}</Title>
            <PerksTitle>
                <ion-icon name="clipboard" ></ion-icon>
                Benefícios:
            </PerksTitle>
            {/* {subscriptionResponse.perks.map(perk => <Perk>{perk.id}. {perk.title}</Perk>)} DANDO ERRO AO ATUALIZAR*/} 
            <PriceTitle>
            <ion-icon name="cash-outline"></ion-icon>
            Preço:
            </PriceTitle>
            <Price>R$ {subscriptionResponse.price} cobrados mensalmente</Price>
            <StyledInput type="text" placeholder="Nome impresso no cartão" onChange={event => setCardName(event.target.value)}/>
            <StyledInput type="text" placeholder="Digitos do cartão" onChange={event => setCardNumber(event.target.value)}/>
            <div>
            <StyledInput2 type="number" placeholder="Código de segurança" onChange={event => setSecurityNumber(event.target.value)}/>
            <StyledInput3 type="text" placeholder="Validade" onChange={event => setExpirationDate(event.target.value)}/>
            </div>
            <StyledButton onClick={()=>setModal("block")}>CADASTRAR</StyledButton>
            <BlackModal modal={modal}></BlackModal>
            <WhiteModal modal={modal}>
                <p>Tem certeza que deseja assinar o plano {subscriptionResponse.name} ({subscriptionResponse.price})?</p>
                <Answer>
                    <AnswerNo onClick={()=>setModal("none")}>Não</AnswerNo>
                    <AnswerYes onClick={()=>subscribeTo()}>Sim</AnswerYes>
                </Answer>
            </WhiteModal>
        </SubscriptionContainer>
    );
}
const SubscriptionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0e0e13;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
    img {
        width: 139.38px;
        height: 95.13px;
        color: white;
        margin-top: 87px;
    }
`;
const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  margin-top: 11.87px;
  margin-bottom: 22px;
`;
const BackArrowDiv = styled.div`
    margin-left: 22px;
    margin-top:24.35px;
    width: 353px;;
    ion-icon{
        Width: 28px;
        Height: 27.29px;
        color: white;
    }
`;
const PerksTitle = styled.div`
    ion-icon{
        color: #FF4791;
        margin-right:5px;
    }
    width: 299px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
`;
const Perk = styled.div`
    width: 299px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 4px;
`;
const PriceTitle = styled.div`
    ion-icon{
        color: #FF4791;
        margin-right:5px;
    }
    width: 299px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 12px;
`;
const Price = styled.div`
    width: 299px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 4px;
    margin-bottom: 34px;
`;
const StyledInput = styled.input`
  width: 298px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;

  padding-left: 14px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #7e7e7e;
`;
const StyledInput2 = styled.input`
  width: 145px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;

  padding-left: 14px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #7e7e7e;
  margin-right:9px;
`;
const StyledInput3 = styled.input`
  width: 145px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;

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
const BlackModal=styled.div`
    display: ${props => props.modal};
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
`;
const WhiteModal = styled.div`
    position: absolute;
    z-index: 3;
    display: ${props => props.modal};
    width: 248px;
    height: 210px;
    left: 64px;
    top: 229px;
    background: #FFFFFF;
    border-radius: 12px;
    padding-left: 21px;
    padding-right: 21px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        color: #000000;
        margin-top: 33px;
    }
`;
const AnswerNo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 95px;
height: 52px;
background: #CECECE;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
`;
const AnswerYes = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 95px;
height: 52px;
background: #FF4791;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
`;
const Answer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 47px;
`;