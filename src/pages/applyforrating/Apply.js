import React, { useState } from "react";
import "./Apply.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Apply = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const history = useNavigate();
  const location = useLocation();
  const [ticket, getticket] = useState("");
  const [start, getstart] = useState("");
  const [end, getend] = useState("");
  const [amount, getamount] = useState("");

  async function submithandler(e) {
    if (!ticket || !start || !end || !amount) {
      alert("fill all details");
    }
    e.preventDefault();
    try {

      await axios
        .post(`${url}/transaction/apply`, {
          ticket,start,end,amount,id: location.state.selfid
        })
        .then((res) => {
          if (res.data === "error") {
            alert("error try again");
          } else {
            alert("submited successful expect a email in 2-4 buissness days")
            history("../login")
          }
        });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className="Meseeker">
        <div className="up">
          <div className="logo">Fine</div>
          </div>
       
        <div className="main-seeker">
          <h1>Raise a request For Rating Incrementation</h1>
          <h2>
            Whenever you have paid a loan to the provider back and cleared all
            dues which you got through us let us know so that we can upgrade
            your Rating
          </h2>
          <form action="post" className="form">
            <div className="text2">Loan Ticket-NO. </div>
            <input
              type="Number"
              placeholder="111111"
              onChange={(e) => getticket(e.target.value)}
              required
            />
            <div className="text2">Loan Start Date</div>
            <input
              type="date"
              placeholder=""
              onChange={(e) => getstart(e.target.value)}
              required
            />
            <div className="text2">Loan End Date</div>
            <input
              type="date"
              placeholder="986532147"
              onChange={(e) => getend(e.target.value)}
              required
            />

            <div className="text2 cl2" id="cl24">
              Total Repayable Amount
            </div>

            <input
              type="Number"
              className="cl2"
              id="cl25"
              placeholder="Amount"
              onChange={(e) => getamount(e.target.value)}
              required
            />
            <div className="note">
              *Only Fill the form When you have Paid Full Loan Dues
            </div>
            <button type="submit" onClick={submithandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
