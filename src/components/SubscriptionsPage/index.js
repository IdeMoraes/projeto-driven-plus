import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function SubscriptionsPage() {
    const {loginResponse, setLoginResponse} = useContext(UserContext);
    // const {subscriptionsResponse, setSubscriptionsResponse} = useState([]); NÃO FUNCIONOU POR NADA.
    const subscriptionsResponseChumbado =[
        {
            id: 1,
            image: "https://svgshare.com/i/dSP.svg",
            price: "39.99"
        },
        { 
            id: 2,
            image: "https://svgshare.com/i/dSQ.svg", 
            price: "69.99"
        },
        { 
            id: 3, 
            image: "https://svgshare.com/i/dQH.svg", 
            price: "99.99" 
        }
    ];
    const config = {
        headers: {
            "Authorization": `Bearer ${loginResponse.token}`
        }
    };
    useEffect(()=>{
        const request = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",config);
        request.then((success)=>{
            console.log(success.data);
            // setSubscriptionsResponse(success.data); //NÃO FUNCIONOU POR NADA.
        });
        request.catch((problem)=>{
            console.log(problem);
        });
    },[]);

  return (
    <SubscriptionsPageContainer>
      <Title>Escolha seu Plano</Title>
      {subscriptionsResponseChumbado.map(sub => <Subscription id={sub.id} image={sub.image} price={sub.price}/>)}
    </SubscriptionsPageContainer>
  );
}
function Subscription(props){
    return(
        <SubscriptionContainer to={`/subscriptions/${props.id}`}>
            <img src={props.image} alt="logo" />
            <p>R$ {props.price}</p>
        </SubscriptionContainer> 
    );
}
const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  margin-top: 29px;
  margin-bottom: 24px;
`;
const SubscriptionsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0e0e13;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
const SubscriptionContainer = styled(Link)`
  width: 290px;
  height: 180px;
  background-color: #0e0e13;
  border: 3px solid #7e7e7e;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }
`;
