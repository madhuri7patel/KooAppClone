import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import "./LoginPopup.css";
export const EmailLogin = ({
  settrigger,
  trigger,
  setEmail,
  email,
  otppopup,
  setOtppopup,
}) => {
  const [enterdEmail, setEnterdEmail] = useState("");
  const { otp, setOtp } = useContext(UserContext);
  const sendOpt = () => {
    const check = Math.floor(Math.random() * 900000) + 100000;

    fetch(
      `https://maker.ifttt.com/trigger/koo/with/key/gZwHGvakwN95-oS8eLLlSi8M9-uWFx_6zz_6JOCxvky?value1=${enterdEmail}&value2=${check}`
    )
      .then(function (res) {
        // alert("success");
        return res.json();
      })
      .then(function (res) {
        //  alert("success");
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });

    alert("otp sent to your email");
    console.log(otp);
    setOtp(check);
    localStorage.setItem("email", enterdEmail)
  };

  const getMail = (e) => {
    setEnterdEmail(e.target.value);
    console.log(enterdEmail);
  };

  const handleSendOtp = () => {
    setEmail(!email);
    sendOpt();
  };
  return trigger ? (
    <div>
      <div id="unblurred" className="popup-login">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Enter your Email</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    settrigger(false);
                  }}
                />
              </button>
            </div>
            {/* <hr /> */}
            <div className="input-cont-popup">
              <div className="inpt-cont-inner"></div>
              <input
                class="phn-inpt"
                id="phone"
                type="email"
                name="email"
                // limit="10"
                placeholder="Enter Email"
                onChange={getMail}
                style={{ marginRight: "24%" }}
              ></input>
            </div>
            <div className="email-verify">
              <span>- OR -</span>
              <a onClick={() => setOtppopup(!otppopup)}>Sign in with phone</a>
            </div>
            <div className="captcha-cont"></div>
            <br />
            <div className="btn-cont">
              <button onClick={handleSendOtp} className="otp-btn" type="submit">
                Send OTP
              </button>
              <div class="cnfrm-inp-div">
                <span>You will recive otp on given number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
