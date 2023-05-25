import React, { useState } from "react";
import "./MeProvider.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const MeProvider = () => {
  const history = useNavigate();
  const location = useLocation();
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  if(!location.state.user){
    history("../login");
  }
  const [amount,setamount] = useState(location.state.user.amount)
  function clicked(){
    document.getElementById("apply").style.display="flex";
  }
  function backed(){
    document.getElementById("apply").style.display="none";
  }
  function accepthandler(ur){
    try {
      history("../payment",{state:{amount:location.state.user.amount,id:location.state.user._id,selfid:ur._id}})
    } catch (error) {
      alert(error)
    }
  }
  async function changeamount(e){
    e.preventDefault()
    try {
      await axios.post(`${url}/provider/update`,{
        id:location.state.user._id,amount:amount
      }).then((res)=>{
        if(res.data=="error"){
          alert("error")
        }
        else{
          alert("Updated Successful Please re-login to see changes")
          history("../login")
        }
      })
    } catch (error) {
      alert(error)
    }
  }
  async function rejecthandle(ur){
    try {
      await axios.post(`${url}/provider/reject`,{
        id:location.state.user._id,selfid:ur._id
      }).then((res)=>{
        if(res.data=="error"){
          alert("error")
        }
        else{
          alert("Rejected Successfully");
          document.getElementById(ur._id).style.display="none";
        }
      })
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
    {!location.state.user ? history("../login") 
      : <><div className="Apply" id="apply">
        <div className="container">
          <div className="heading">
            Change Loan Amount <button onClick={backed}>X</button>
          </div>
          <form>
          <div className="line">

          <div className="amount">Amount:</div>
            <input type="Number" placeholder={location.state.user.amount} onChange={(e)=>setamount(e.target.value)} ></input>
          </div>
            <button type="submit" onClick={(e)=>changeamount(e)}>Change</button>
          </form>
        </div>
      </div>
    <div className="Meseeker">
      <div className="up">
        <div className="logo">Fine</div>
        <div className="right-up">
          <div className="name">{location.state.user.name}</div>
        </div>
      </div>
      <div className="main-seeker">
        <div className="btns">
          <button onClick={clicked}>Edit Loan amount</button>

        </div>

        <h1>List of People Applied</h1>
        {location.state.users.length !== 0 ? (
            location.state.users.map((ur) => {
              return (
        <div className="box" id={ur._id}>
          <div className="name">
            {ur.name} <h2>&#40;{ur.rating} star&#41; <button onClick={()=>accepthandler(ur)}>Accept</button> <button onClick={()=>rejecthandle(ur)}>Reject</button>  </h2>
          </div>
          <div className="interest">Rs {ur.amount} (his ask)</div>
        </div>
        );
            })
          ) : (
            <h1 className="not">Currently No-one applied</h1>
          )}
       </div>
       </div> 
       </>}
    </>
  );
};

export default MeProvider;
