import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => navigate("/home")}
          className="loginScreen_button"
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch?</h3>
          <div className="loginScreen__input">
            <button
              onClick={() => navigate("/home")}
              className="loginScreen__getStarted"
            >
              GET STARTED
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
