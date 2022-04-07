import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubscriptionsPage() {
  return (
    <SubscriptionsPageContainer>
      <Title>Escolha seu Plano</Title>
      <Subscription to="/subscriptions/ID_DO_PLANO">
        <img src="https://svgshare.com/i/dSP.svg" alt="logo" />
        <p>R$ 39,99</p>
      </Subscription>
    </SubscriptionsPageContainer>
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
const Subscription = styled(Link)`
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
