import React, { useContext, useState } from "react";
import '../css/styles.css';
import MyContex from "../Context/context";
import { useNavigate } from "react-router-dom";



function Log() {

  //עיצוב
  const divStyle = {
    backgroundImage: `url("/images/bak.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "94vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",

  };

  const nav = useNavigate();
  //הגדרת משתנים
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  //יבוא הפונקציות מהסטור
  const { signup, login } = useContext(MyContex);

  //פונקציה שמפעילה את התחברות מהסטור
  const onLog = () => {
    if (login(email, pas)) {
      nav("/profile");
    } else {
      setIsLogin(false);
    }
  };

  //פונקציה שמפעילה את הרשמה מהסטור
  const onSign = () => {
    const newUser = { name, email, pas };
    if (signup(newUser)) {
      nav("/profile");
    }
  };

  //פונקציה שמשנה מהרשמה להתחברות וההפך
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={divStyle}>
      <div className="log-container">
        <div className={`form-box ${isLogin ? "show-login" : "show-register"}`}>
          <div className="form">
            <div
              className={`login-form ${isLogin ? "active" : "inactive"}`}
              aria-hidden={!isLogin}
            >
              <h2>Login</h2>
              {/* //שליפת ערכים מהמשתמש ושינוי במשתנים */}
              <input type="text" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
              <input type="password" placeholder="Password" onChange={e => { setPas(e.target.value) }} />
              {/* //הפעלת הפונקציה על המשתנים ששונו */}
              <button onClick={() => onLog()}>Login</button>
            </div>
            <div
              className={`register-form ${!isLogin ? "active" : "inactive"}`}
              aria-hidden={isLogin}
            >
              <h2>Register</h2>
              <input type="text" placeholder="Username" onChange={e => { setName(e.target.value) }} />
              <input type="email" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
              <input type="password" placeholder="Password" onChange={e => { setPas(e.target.value) }} />
              <button onClick={() => onSign()}>Register</button>
            </div>
          </div>
        </div>
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? "Go to Register" : "Go to Login"}
        </button>
      </div>
    </div>
  );
}

export default Log;
