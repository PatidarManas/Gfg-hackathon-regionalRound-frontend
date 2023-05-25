import React from "react";
import img from "../../islamic-7078279_1280.png";
import "./Home.scss";
import img1 from "../../1.png";
import img2 from "../../img2.png";
import icon1 from "../../icon1.png";
import icon2 from "../../icon2.png";
import icon3 from "../../icon3.png";
import i from "../../I.svg";
import { AiFillStar } from "react-icons/ai";
import icon4 from "../../icon4.png";
import tr1 from "../../tr1.png";
import tr2 from "../../tr2.png";
import tr3 from "../../tr3.png";
import tr4 from "../../tr4.png";
import logo from "../../Logo3.svg";
import logo2 from "../../Logo2.svg";
import product from "../../product.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const history = useNavigate();
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="btns">
            <a onClick={() => window.location.replace("/#service")}>Service</a>
            <a onClick={() => window.location.replace("/#why")}>Why Fine</a>
            <a onClick={() => window.location.replace("/#rating")}>
              Rating-System
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="front">
          <div className="left">
            <div className="t1">
              It's
              <div className="logo">
                <img src={logo2}></img>
              </div>{" "}
              :
            </div>
            <div className="t3">
              <div className="t3t">
                Unlocking the possibilities of your financial future &#128512;{" "}
              </div>
            </div>
            <div className="t2"></div>
            <div className="btns">
              <button
                className="btn"
                onClick={() => {
                  history("/signup-seeker");
                }}
              >
                Sign-up
              </button>
              <button
                className="btn"
                onClick={() => {
                  history("/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="right">
            <div className="product">
              <div className="img">
                <img src={product} alt=""></img>
              </div>
              <h2>Stuck because of Capital</h2>
              <h1>
                Overcome capital constraints with our exceptional service,
                designed to free you from the shackles of financial limitations.
              </h1>
            </div>
          </div>
        </div>
        <div className="t4r">Scroll down to see services &#128071;</div>

        <div className="services" id="service">
          <div className="larger-box">
            <div className="text">Se&#x20B9;vices</div>
            <div className="box">
              <div className="left-box">
                <div className="left-img">
                  <img src={img2} />{" "}
                </div>
                <div className="left-text">
                  Capital constraints can be a major obstacle for businesses of
                  all sizes. They can prevent you from expanding your
                  operations, investing in new products or services, or even
                  just meeting your day-to-day expenses.{" "}
                </div>
              </div>
              <div className="right-box">
                <h1>Get a Loan</h1>
                <div className="right-text">
                  Convenience: Our website is easy to use and can be accessed
                  from anywhere with an internet connection. This makes it easy
                  for both loan providers and seekers to find each other and
                  connect. 
                  Speed: Our website is designed to process loan
                  applications quickly and efficiently. This means that loan
                  providers can get approved for loans quickly, and loan seekers
                  can get the money they need when they need it. Transparency:
                  Our website provides complete transparency to both loan
                  providers and seekers. This means that everyone knows exactly
                  what they are getting into, and there are no surprises.
                  Security: Our website is secure and uses the latest encryption
                  technology to protect your personal information. This means
                  that you can rest assured that your information is safe when
                  you use our website.
                </div>
                <h2>Steps:</h2>
                <div className="right-down-box">
                  <div className="small-box">
                    <div className="image-small">
                      <img src={icon1}></img>
                    </div>
                    <div className="text">Signup</div>
                  </div>
                  <div className="small-box">
                    <div className="image-small">
                      <img src={icon2} className="sm"></img>
                    </div>
                    <div className="text">Apply</div>
                  </div>
                  <div className="small-box">
                    <div className="image-small">
                      <img src={icon3} className="sm"></img>
                    </div>
                    <div className="text">Approval</div>
                  </div>
                  <div className="small-box">
                    <div className="image-small">
                      <img src={icon4}></img>
                    </div>
                    <div className="text">Connect</div>
                  </div>
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    history("/signup-seeker");
                  }}
                >
                  Proceed to Signup
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Rating" id="rating">
          <div className="box">
            <h1>Our Rating System</h1>
            <div className="stars">
              <AiFillStar color="orange" size={30} />
              <AiFillStar color="orange" size={30} />
              <AiFillStar color="orange" size={30} />
              <AiFillStar color="orange" size={30} />
              <AiFillStar color="orange" size={30} />
            </div>
            <div className="text">
              <p>
                {" "}
                Our rating system plays a <h1>crucial role</h1> in assisting
                both providers and loan seekers in making{" "}
                <h1>informed decisions</h1>. By utilizing our rating system,
                providers can make better judgments when evaluating potential
                loan applicants. Additionally, <h1>loan seekers</h1> benefit
                from this system as it <h1>enhances their chances</h1> of a
                successful loan process by steadily increasing their ratings
                over time
              </p>
              <p>
                To enhance their rating, loan seekers can conveniently{" "}
                <h1>complete a form</h1> within their account section once they
                have successfully repaid their previous loan. Our{" "}
                <h1>team will diligently verify</h1> the information provided,
                and a decision will be reached within a reasonable timeframe of
                2-4 business days.
              </p>
            </div>
          </div>
        </div>

        <div className="Why" id="why">
          <div className="box">
            <h1>Why Chose Fine</h1>
            <div className="boxes">
              <div className="small">
                <img src={tr1}></img>
                <h1>150+</h1>
                <h2>Providers</h2>
              </div>
              <div className="small">
                <img src={tr2}></img>
                <h1>1000+</h1>
                <h2>Seekers</h2>
              </div>
              <div className="small">
                <img src={tr4}></img>
                <h1>15 lakh </h1>
                <h2>Rs Sanctioned</h2>
              </div>
              <div className="small">
                <img src={tr3}></img>
                <h1>100%</h1>
                <h2>Trusted</h2>
              </div>
            </div>
            <h3>#Untrue Data</h3>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text1">developed under Solving for India Hackathon</div>
        <div className="text2">team name: MMBS(Parul University) </div>
      </div>
    </>
  );
};

export default Home;
