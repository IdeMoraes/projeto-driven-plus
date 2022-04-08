import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/style.css";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import UserContext from "./contexts/UserContext";
import SubscriptionContext from "./contexts/SubscriptionContext";
import { useState } from "react";
import SubscriptionPage from "./components/SubscriptionPage";
import HomePage from "./components/HomePage";

function App() {
    const [loginResponse,setLoginResponse]=useState([]);
    const [subscribeResponse, setSubscribeResponse]=useState([]);

  return (
    <SubscriptionContext.Provider value={{subscribeResponse, setSubscribeResponse}}>

      <UserContext.Provider value={{loginResponse, setLoginResponse}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscriptions/:ID_DO_PLANO" element={<SubscriptionPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/users/ID_DO_PLANO" element={< />} /> */}
            {/* <Route path="/users/ID_DO_PLANO/update" element={< />} /> */}
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </SubscriptionContext.Provider>

  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
