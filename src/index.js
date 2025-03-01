import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./myDoc/Home";

// My code
import MyForm from "./myDoc/MyForm";
import MyFormMul from "./myDoc/MyFormMul";
import MyEffect from "./myDoc/MyEffect";
import RegistrationPage from "./pages/RegistrationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MyForm />
    <MyFormMul />
    <MyEffect />
    <Home /> */}
    <RegistrationPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
