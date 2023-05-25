import React, { useState } from "react";
import "./Login.scss";
import logo from "../../Logo3.svg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const history = useNavigate();
  const [ack, setack] = useState("");
  const [key, setkey] = useState("");
  async function submithandler() {
    if (ack[0] === "S") {
      try {
        await axios
          .post(`${url}/seeker/login`, {
            ack,
            key,
          })
          .then((res) => {
            if (res.data == "error") {
              alert("Login Failed");
            } else {
              const { users, user } = res.data;
              history("../seeker-me", { state: { users: users, user: user } });
            }
          });
      } catch (error) {
        alert(error);
      }
    } else if (ack[0] === "P") {
      try {
        await axios
          .post(`${url}/provider/login`, {
            ack,
            key,
          })
          .then((res) => {
            if (res.data == "error") {
              alert("Login Failed");
            } else {
              const { users, user } = res.data;
              history("../provider-me", { state: { users: users, user: user } });
            }
          });
      } catch (error) {
        alert(error);
      }
    }else if(ack==="admin"){
      try {
        await axios.post(`${url}/transaction/admin`,{
          key
        }).then((res)=>{
          if(res.data=="error"){
            alert("error")
          }
          else{
            const {tr,info,rating} = res.data;
            history("../admin",{state:{info:res.data.info,tr:res.data.tr,rating:res.data.rating}})
          }
        })
      } catch (error) {
        
      }
    }
     else {
      alert("False information");
    }
  }
  return (
    <div className="bg">
      <div className="left">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="text3">Welcome back!</div>
        <div className="text4">To get to our services please login</div>
        <button onClick={()=>{history("../signup-seeker")}} className="signup">Sign-Up</button>
      </div>
      <div className="right">
        <div className="login">
          <div className="text1">Login</div>
          <form action="#" className="form">
            <div className="text2">Acknowledment No</div>
            <input
              type="text"
              placeholder="123456"
              onChange={(e) => setack(e.target.value)}
            />
            <div className="text2">Key</div>
            <input
              type="password"
              placeholder="xyzedf"
              onChange={(e) => setkey(e.target.value)}
            />
            <button className="btn" type="submit" onClick={submithandler}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
