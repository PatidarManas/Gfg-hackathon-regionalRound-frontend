import React, { useEffect, useState } from "react";
import "./Success.scss";
import { useLocation, useNavigate } from "react-router-dom";
const Success = () => {
  const location = useLocation();
  const history= useNavigate();
  useEffect(() => {
    if (!location.state){
     history("../signup-seeker")   
    }
},[])
  return (
    (location.state)?
    <div className="bg">
      <div className="left">
        <div className="logo">Fine</div>
        <div className="text3">Success!</div>
        <div className="text4">Now you can go to Login page with the details</div>
        <button className="signup" onClick={()=>{history("../login")}}>Login</button>

      </div>
      <div className="right">
        <div className="login">
          <div className="text1">Aknowledgment no.: {location.state.ack}</div>
          <button onClick={()=>navigator.clipboard.writeText(location.state.ack) }>Copy-Aknowledgment</button>
          <div className="text1">Key: {location.state.key}</div>
          <button onClick={()=>navigator.clipboard.writeText(location.state.key)}>Copy-key</button>
        
          
        </div>
      </div>
    </div>:<>{history("/signup",{ replace: true })}</>
  );
};

export default Success;
