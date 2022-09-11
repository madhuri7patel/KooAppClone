import React from "react";
import "./LoginPopup.css";
export const PhoneOtp = ({ settrigger, trigger, phone, setPhone }) => {
  return trigger ? (
    <div>
      <div id="unblurred" className="popup-login">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Enter otp sent to Phone</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    setPhone(!phone);
                    settrigger(false);
                  }}
                />
              </button>
            </div>
            <hr />
            <div className="input-cont-popup">
              <div className="inpt-cont-inner">
                {/* <div className="cont-code">
                          🇮🇳
                          <span>+91</span>
                        </div> */}
              </div>
              <input
                class="phn-inpt"
                id="phone"
                type="integer"
                name="otp"
                // limit="10"
                placeholder="Enter otp"
                value=""
                style={{ marginRight: "24%" }}
              ></input>
            </div>
            {/* <div className="email-verify">
                      <span>- OR -</span>
                      <a href="/">Sign in with phone</a>
                    </div> */}
            <div className="captcha-cont">
              <div class="cnfrm-inp-div">
                <span>OTP usually arrives within 1 minute</span>
              </div>
            </div>
            <br />
            <div class="cnfrm-inp-div">
              <span>confirm otp</span>
            </div>
            <div className="btn-cont">
              <button className="otp-btn" type="submit">
                Submit
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
