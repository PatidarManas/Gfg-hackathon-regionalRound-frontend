import React, { useState } from "react";
import "./Provider.scss";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Provider = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const history = useNavigate();
  const [name,getname] = useState("")
  const [email,getemail] = useState("")
  const [amount,getamount] = useState("")
  const [mobile,getmobile] = useState("")
  const [time,gettime] = useState("")
  const [interest,getinterest] = useState("")
  const [discription,getdiscription] = useState("")

  async function submithandler(e){
    if(!name || !email || !amount || !mobile || !time || !interest || !discription){
      alert("fill all details")
    }
    else{

      e.preventDefault();
      try {
        await axios.post(`${url}/provider/register`,{
        name,email,amount,mobile,time,interest,discription
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
        <div className="logo">Fine</div>
        <div className="text3">New Here!</div>
        <div className="text4">Create your account and get to our services</div>
        <button onClick={()=>{history("../login")}} className="signup">Login</button>
        <button onClick={()=>{history("../signup-seeker")}} className="btn">For Loan-Seekers</button>

      </div>
      <div className="right">
        <div className="login">
          <div className="text1">Sign-up &#40;For Loan-Providers&#41;</div>
          <form action="post" className="form">
            
            <div className="text2">Full-Name</div>
            <input type="text" placeholder="Xyz abc" onChange={(e)=>getname(e.target.value)} required/>
            <div className="text2">Email-id</div>
            <input type="email" placeholder="xyzedf@mail.com" onChange={(e)=>getemail(e.target.value)} required />
            <div className="text2">Mobile-no.</div>
            <input type="tel" placeholder="986532147" onChange={(e)=>getmobile(e.target.value)} required/>
            
            <div className="text2 cl2" id="cl24">Amount</div>

            <input
              type="Number"
              className="cl2"
              id="cl25"
              placeholder="Sanction Amount"
              onChange={(e)=>getamount(e.target.value)} required
            />
            <div className="text2 cl2" id="cl26">Interest Rate(Yearly)</div>
            <input
              type="Number"
              className="cl2"
              id="cl27"
              placeholder="Rate of interest"
              onChange={(e)=>getinterest(e.target.value)} required
            />
            <div className="text2 cl2" id="cl28">Time Period(In months)</div>
            <input type="Number" className="cl2" id="cl29" placeholder="Time period"  onChange={(e)=>gettime(e.target.value)} required/>
            <div className="text2">discription &#40;Please enter the Loan details and conditions &#41; </div>
            <textarea rows={5} coloums={50} maxlength="500" minlength="5" placeholder="Please enter the Loan details and conditions" onChange={(e)=>getdiscription(e.target.value)} required> </textarea>
            <button type="submit" onClick={submithandler} >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Provider ;
