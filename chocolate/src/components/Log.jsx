import React, { useContext, useState } from "react";
import "./styles.css";
import MyContex from "../context";

function Log() {


  const [email,setEmail]=useState("");
  const [pas,setPas]=useState("");
  const[name,setName]=useState("");
//   const [newUser,setNewUser]=useState(null)

  const { login } = useContext(MyContex);
  const{sigenup}=useContext(MyContex)

  const onLog=()=>{
    login(email,pas);
  }

  const onSigen = () => {
    const newUser = { name, email, pas };
    sigenup(newUser);
  };
  

  const [isLogin, setIsLogin] = useState(true); 


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="log-container">
      <div className={`form-box ${isLogin ? "show-login" : "show-register"}`}>
        <div className="form">
          <div
            className={`login-form ${isLogin ? "active" : "inactive"}`}
            aria-hidden={!isLogin}
          >
            <h2>Login</h2>
            <input type="text" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="Password"  onChange={e=>{setPas(e.target.value)}} />
            <button onClick={()=>onLog()}>Login</button>
          </div>
          <div
            className={`register-form ${!isLogin ? "active" : "inactive"}`}
            aria-hidden={isLogin}
          >
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={e=>{setName(e.target.value)}}/>
            <input type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password"onChange={e=>{setPas(e.target.value)}} />
            <button onClick={()=>onSigen()}>Register</button>
          </div>
        </div>
      </div>
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </button>
    </div>
  );
}

export default Log;
