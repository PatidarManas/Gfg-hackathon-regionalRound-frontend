import React, { useState } from "react";
import "./me-Seeker.scss";
import logo from "../../Logo3.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
const MeSeeker = () => {
  const url = "https://backend-uieen2ztva-as.a.run.app/"
  const location = useLocation();
  const history = useNavigate();
  var isapply = false;
  const [amount, setamount] = useState(location.state.user.amount);
  const arr = location.state.user.applied_to;
  function clicked() {
    document.getElementById("apply").style.display = "flex";
  }
  function backed() {
    document.getElementById("apply").style.display = "none";
  }
  async function changeamount(e) {
    e.preventDefault();
    try {
      await axios
        .post(`${url}/seeker/update`, {
          id: location.state.user._id,
          amount: amount,
        })
        .then((res) => {
          if (res.data == "error") {
            alert("error");
          } else {
            alert("Updated Successful Please re-login to see changes");
            history("../login");
          }
        });
    } catch (error) {
      alert(error);
    }
  }
  async function ratinghandler() {
    try {
      history("../apply", { state: { selfid: location.state.user._id } });
    } catch (error) {
      alert(error);
    }
  }
  async function clickhandler(ur) {
    try {
      await axios
        .post(`${url}/seeker/apply`, {
          selfid: location.state.user._id,
          id: ur._id,
          amount: ur.amount,
          Interest: ur.interest_rate,
        })
        .then((res) => {
          if (res.data == "error") {
            alert("error");
          } else {
            alert("applied");
            isapply = true;
            document.getElementById(ur._id).disabled = "true";
            document.getElementById(ur._id).innerHTML = "Applied";
          }
        });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className="Apply" id="apply">
        <div className="container">
          <div className="heading">
            Change Loan Amount <button onClick={backed}>X</button>
          </div>
          <form action="#">
            <div className="line">
              <div className="amount">Amount:</div>
              <input
                type="Number"
                placeholder={location.state.user.amount}
                onChange={(e) => setamount(e.target.value)}
              ></input>
            </div>
            <button type="submit" onClick={(e) => changeamount(e)}>
              Change
            </button>
          </form>
        </div>
      </div>
      <div className="Meseeker">
        <div className="up">
          <div className="logo">
            <img src={logo} alt="" />{" "}
          </div>
          <div className="right-up">
            <div className="name">{location.state.user.name}</div>
            <div className="rate">
              {location.state.user.rating  +" Star"}
            </div>
          </div>
        </div>
        <div className="main-seeker">
          <div className="btns">
            <button onClick={clicked}>Edit Loan amount</button>
            <button onClick={ratinghandler}>Apply for Rating increment</button>
          </div>
          <h1>List of providers(Who suits your loan range)</h1>
          {location.state.users.length !== 0 ? (
            location.state.users.map((ur) => {
              return (
                <div className="box">
                  <div className="name">
                    {ur.name}{" "}
                    <h2>
                      
                      {location.state.user.applied_to.includes(ur._id) ? (
                        <button value={ur} disabled>
                          Applied
                        </button>
                      ) : (
                        <button
                          value={ur}
                          id={ur._id}
                          onClick={() => clickhandler(ur)}
                        >
                          Apply
                        </button>
                      )}
                    </h2>
                  </div>
                  <div className="interest">
                    Rs {ur.amount} At {ur.interest_rate}% For {ur.time} Years{" "}
                  </div>
                  <div className="desc">{ur.discription}</div>
                </div>
              );
            })
          ) : (
            <h1 className="not">Currently No Such Provider available</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default MeSeeker;
