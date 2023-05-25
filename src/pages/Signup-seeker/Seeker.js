import React, { useState } from "react";
import "./Seeker.scss";
import axios from "axios"
import logo from "../../Logo3.svg"
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const history = useNavigate();
  const [name,getname] = useState("")
  const [email,getemail] = useState("")
  const [amount,getamount] = useState("")
  const [mobile,getmobile] = useState("")

  async function  submithandler(e){
    if(!name || !email || !amount || !mobile){
      alert("fill all details")
    }
    else{

      e.preventDefault();
      try {
      await axios.post(`${url}/seeker/register`,{
        name,email,amount,mobile
      }).then(res=>{
        if(res.data==="error"){
          alert("error try again")
        }
        else{
          const {acknowledgment,key} = res.data;
          history("/success",{state:{ack:acknowledgment,key:key}})
        }
      })
      
    } catch (error) {
      alert(error);
    }
  }
  }
  return (
    <div className="bg">
      <div className="left">
        <div className="logo">
        <img src={logo} alt="" /> </div>
        <div className="text3">New Here!</div>
        <div className="text4">Create your account and get to our services</div>
        <button onClick={()=>{history("../login")}} className="signup">Login</button>
        <button onClick={()=>{history("../signup-provider")}} className="btn">For Loan-Providers</button>
      </div>
      <div className="right">
        <div className="login">
          <div className="text1">Sign-up &#40;For Loan-Seekers&#41;</div>
          <form action="#" method="post" className="form">
            
            <div className="text2">Full-Name</div>
            <input type="text" name="name" placeholder="123456" onChange={(e)=>getname(e.target.value)} required/>
            <div className="text2">Email-id</div>
            <input type="email" name="email"  placeholder="xyzedf@mail.com" onChange={(e)=>getemail(e.target.value)} required/>
            <div className="text2">Mobile-no.</div>
            <input type="tel" name="mobile" placeholder="986532147" onChange={(e)=>getmobile(e.target.value)} required/>
            <div className="text2 cl1" id="cl11">Amount</div>

            <input type="Number" name="amount" className="cl1" id="cl12" placeholder="Loan amount" onChange={(e)=>getamount(e.target.value)} required/>
            
            
            <button className="button" type="submit" onClick={submithandler} >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
