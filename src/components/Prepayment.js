import React, { useState } from 'react'
import "./seek.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Prepayment = () => {
    const url = "https://backend-uieen2ztva-as.a.run.app/"
    const history = useNavigate()
    const [ticket,setticket] = useState("");
    async function submithandler(){
        try {
            await axios.post(`${url}/transaction/login`,{
                ticket
            }).then((res)=>{
                if(res.data=="error"){
                    alert("error")
                }
                else{
                    history("../payment",{state:{selfid:res.data.from,id:res.data.to,amount:res.data.amount,check:true}})
                }
            })
        } catch (error) {
            alert("acha"+error)
        }
    }
  return (
    <div className='payment'>
        <div className="box">

        <h1>Here's the last step </h1>
        <form action='#'>
            <label>Enter Ticket No.</label>
            <input type='text' onChange={(e)=>setticket(e.target.value)} required/>
            <button type='submit' onClick={submithandler}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Prepayment