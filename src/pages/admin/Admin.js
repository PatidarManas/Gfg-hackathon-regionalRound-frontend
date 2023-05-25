import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";
import logo from "../../Logo3.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Admin = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const location = useLocation();
  const history = useNavigate();
  const [ack, setack] = useState("");
  const [rating, setrating] = useState(0);
  const [ticket, setticket] = useState("");
  const [searchtrresult, setsearchtrresult] = useState({});
  const [check, setcheck] = useState(false);
  const [searchtrresult2, setsearchtrresult2] = useState({});
  const [check2, setcheck2] = useState(false);
  const [ele, setele] = useState({});

  function trhandler() {
    document.getElementById("tr").style.display = "flex";
  }
  function actionhandler(element){
    document.getElementById("ratingaction").style.display = "flex";
    setele(element);
  }
  function trclose() {
    document.getElementById("tr").style.display = "none";
  }
  function ratinghandler() {
    document.getElementById("rating").style.display = "flex";
  }
  function ratingactionclose(){
    
    document.getElementById("ratingaction").style.display = "none";

  }
  function ratingclose() {
    document.getElementById("rating").style.display = "none";
  }
  function srresultclose() {}
  function clientclose() {
    document.getElementById("client").style.display = "none";
  }
  async function searchtrhandler(e) {
    e.preventDefault();
    try {
      await axios
        .post(`${url}/transaction/login`, {
          ticket,
        })
        .then((res) => {
          if (res.data == "error") {
            alert("error");
          } else {
            setsearchtrresult(res.data.tr);
            setcheck(true);
            document.getElementById("trresult").style.display = "flex";
          }
        });
    } catch (error) {
      alert(error);
    }
  }
  async function clientsubmithandler(e) {
    e.preventDefault();
    if (ack[0] === "S") {
      try {
        await axios
          .post(`${url}/seeker/login`, {
            ack,
            key: "admin@123",
          })
          .then((res) => {
            if (res.data == "error") {
              alert("Login Failed");
            } else {
              const { user } = res.data;
              setsearchtrresult2(user);
              setcheck2(true);
              document.getElementById("clientresult").style.display = "flex";
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
            key: "admin@123",
          })
          .then((res) => {
            if (res.data == "error") {
              alert("Login Failed");
            } else {
              const { user } = res.data;
              setsearchtrresult2(user);
              setcheck2(true);
              document.getElementById("clientresult").style.display = "flex";
            }
          });
      } catch (error) {
        alert(error);
      }
    }
  }
  function clienthandler() {
    document.getElementById("client").style.display = "flex";
  }
  function trresultclose() {
    document.getElementById("trresult").style.display = "none";
    setsearchtrresult({});
    setcheck(false);
  }
  function clientresultclose() {
    document.getElementById("clientresult").style.display = "none";
    setcheck2(false);
    setsearchtrresult2({});
  }
  async function ratingchange(e){
    e.preventDefault();
    try {
      await axios.post(`${url}/seeker/updaterating`,{
        id:ele.id,rating
      }).then((res)=>{
        if(res.data=="error"){
          alert("error")
        }
        else{
          alert("Succesfully Updated To see changes please re-login")
          history("../login")
        }
      })
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div className="Meseeker">
        <div className="up">
          <div className="logo">
          <img src={logo}></img></div>
          <div className="right-up">
            <div className="name">Admin</div>
          </div>
        </div>
        <div className="Transactions" id="tr">
          <div className="main-box">
            <h1>Transactions</h1>
            <button className="close" onClick={trclose}>
              Close
            </button>
            <form action="#">
              <h2>Search By Ticket no.</h2>
              <input
                type="text"
                placeholder="ticket no."
                onChange={(e) => setticket(e.target.value)}
              ></input>
              <button onClick={(e) => searchtrhandler(e)}>Search</button>
            </form>
            <div className="result" id="trresult">
              {check ? (
                <>
                  <div className="box">
                    <h3>From : {searchtrresult.u1.acknowledgment}</h3>
                    <h3>From(name) : {searchtrresult.u1.name} </h3>
                    <h3>To : {searchtrresult.u2.acknowledgment}</h3>
                    <h3>To(name) : {searchtrresult.u2.name}</h3>
                    <h3>Amount : {searchtrresult.tr.amount}</h3>
                    <h3>Interest Rate : {searchtrresult.tr.Interest}</h3>
                    <h3>Ticket : {searchtrresult.tr.ticket}</h3>
                    <h3>Status : {searchtrresult.tr.status}</h3>
                    <button className="closebtn" onClick={trresultclose}>
                      Close
                    </button>
                  </div>
                </>
              ) : (
                "No data relogin"
              )}
            </div>
            <div className="cl1">
              <h3>Ticket No.</h3>
              <h3>Amount</h3>
              <h3>Interest Rate</h3>
              <h3>Status</h3>
            </div>
            {location.state.tr.map((element) => {
              return (
                <div className="cl2">
                  <h3>{element.ticket}</h3>
                  <h3>Rs {element.amount}</h3>
                  <h3>{element.Interest}%</h3>
                  <h3>{element.status}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="client" id="client">
          <div className="main-box">
            <h1>Search client details</h1>
            <button className="close" onClick={(e) => clientclose(e)}>
              Close
            </button>
            <form action="#">
              <h2>Search By Acknowledment no.</h2>
              <input
                type="text"
                placeholder="Acknowledgment No."
                onChange={(e) => setack(e.target.value)}
              ></input>
              <button type="submit" onClick={clientsubmithandler}>
                Search
              </button>
            </form>
            <div className="result" id="clientresult">
              {check2 ? (
                <>
                  <div className="box">
                    <h3>
                      Account Type:{" "}
                      {searchtrresult2.acknowledgment[0] == "P"
                        ? "Provider"
                        : "Seeker"}
                    </h3>
                    <h3>Name : {searchtrresult2.name}</h3>
                    <h3>Mobile : {searchtrresult2.mobile}</h3>
                    <h3>Email-id : {searchtrresult2.email}</h3>
                    <h3>Rating : {searchtrresult2.rating} Star</h3>
                    <h3>Acknowledgment : {searchtrresult2.acknowledgment}</h3>
                    <h3>Amount : {searchtrresult2.amount}</h3>
                    {searchtrresult2.acknowledgment[0] == "P" ? (
                      <>
                        <h3>
                          Interest Rate : {searchtrresult2.interest_rate}{" "}
                        </h3>
                        <h3>Time : {searchtrresult2.time}</h3>
                        <h3>Discription : {searchtrresult2.discription}</h3>
                      </>
                    ) : (
                      ""
                    )}
                    <button className="closebtn" onClick={clientresultclose}>
                      Close
                    </button>
                  </div>
                </>
              ) : (
                "No data relogin"
              )}
            </div>
          </div>
        </div>
        <div className="rating" id="rating">
          <div className="main-box">
            <button className="close" onClick={ratingclose}>
              Close
            </button>
            <h1>Applications For Rating Incrementation</h1>
            <div className="result" id="ratingaction">
              <div className="box">
                <form action="#">
                  <h2>Change the rating(0-5)</h2>
                  <input placeholder="2" type="text" onChange={(e)=>setrating(e.target.value)}></input>
                  <button onClick={(e)=>ratingchange(e)}>Save</button>
                </form>
            <button className="closebtn" onClick={ratingactionclose}>
              Close
            </button>
              </div>
            </div>
            <div className="cl1">
              <h3>Ticket No.</h3>
              <h3>Amount</h3>
              <h3>Start to end Date</h3>
              <h3>Action</h3>
            </div>
            {location.state.rating.map((element) => {
              return(
              <div className="cl2">
                <h3>{element.ticket}</h3>
                <h3>Rs {element.amount}</h3>
                <h3>
                  {element.start.slice(0,10)} to {element.end.slice(0,10)}
                </h3>
                <button onClick={()=>actionhandler(element)}>Take Action</button> 
              </div>
              )
            })}
          </div>
        </div>
        <div className="main-seeker">
          <div className="btns">
            <button onClick={trhandler}>All Transactions</button>
            <button onClick={clienthandler}>Client Details</button>
            <button onClick={ratinghandler}>
              Applications for Rating increment
            </button>
          </div>
          <div className="info">
            <h2>Total Seeker's : {location.state.info.u1}</h2>
            <h2>Total Providers : {location.state.info.u2}</h2>
            <h2>Total Applications : {location.state.info.u3}</h2>
            <h2>Total Sanctioned Amount : Rs {location.state.info.u4}</h2>
            <h2>Revenue : Rs {location.state.info.u5}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
