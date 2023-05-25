import React from 'react'
import "./payment.scss"
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Payment = () => {
    const url = "https://backend-uieen2ztva-as.a.run.app/"
    const location=useLocation()
    async function clickhandler(){
        if(location.state.check){
            try {
                 await axios.post(`${url}/transaction/success`,{
                    from:location.state.selfid,to:location.state.id
                 }).then((res)=>{
                    if(res.data=="error"){
                        alert('error')
                    }
                    else{
                        document.getElementById("success").style.display="flex";
                    }
                 })           
            } catch (error) {
                alert(error)
            }
        }
        else{

        
        try {
            await axios.post(`${url}/provider/accept`,{
                selfid:location.state.selfid,id:location.state.id
            }).then((res)=>{
                if(res.data=="error"){
                    alert("error")
                }
                else if(res.data=="success"){
                    document.getElementById("success").style.display="flex";

                }
            })
        } catch (error) {
            alert(error)
        
        }
    }
    }
  return (
    <>
    <div className="success" id="success">
        <h1>Payment Succesfull!</h1>
        <h2>As soon as the other side makes the payment you will receive a mail with Constact Details</h2>
        <a href='/'>Go To Home</a>
        <a href='/login'>Go To Login Page</a>
    </div>
    <div className='payment'>
        <h1>Payment Gateway</h1>
        <h3>to proceed further and get the information of client pay the Consultancy charge</h3>
        <div className="amount">Payable amount(1%): {location.state.amount*0.01}</div>
        <button onClick={clickhandler}>Pay</button>
    </div>
    </>
  )
}

export default Payment