import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/style.css";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SubscriptionPage from "./components/SubscriptionPage";

function App() {
    const [loginResponse,setLoginResponse]=useState([]);

  return (
      <UserContext.Provider value={{loginResponse, setLoginResponse}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscriptions/:ID_DO_PLANO" element={<SubscriptionPage />} />
            {/* <Route path="/home" element={< />} /> */}
            {/* <Route path="/users/ID_DO_PLANO" element={< />} /> */}
            {/* <Route path="/users/ID_DO_PLANO/update" element={< />} /> */}
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
