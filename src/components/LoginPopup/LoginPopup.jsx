import React, { useState } from "react"
import './LoginPopup.css';
import { assets } from "../../assets/assets"

export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="login-popup-inputs">
            {currState==="Login" ? <></> : <input type="text" placeholder="User name" required />}
            <input type="email" placeholder="User email" required />
            <input type="password" placeholder="password" required />
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Be continuing, I agree to the terms of use & privace policy.</p>
          </div>
          {currState==="Login"
          ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >Click here</span></p>
          :<p>Already have an account? <span onClick={()=>setCurrState("Login")} >Login here</span></p>
          }
          
        </form>
      </div>
    </div>
  );
}
