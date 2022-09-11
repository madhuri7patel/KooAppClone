import React from "react";
import "./LoginPopup.css";
import { PhoneOtp } from "./PhoneOtp";

export const PhoneLogin = ({
  settrigger,
  trigger,
  setPhone,
  phone,
  otppopup,
  setOtppopup,
}) => {
  return trigger ? (
    <div>
      <div id="unblurred" className="popup-login">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Enter your phone number</span>
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
              <div className="inpt-cont-inner">
                <div className="cont-code">
                  🇮🇳
                  <span>+91</span>
                </div>
              </div>
              <input
                class="phn-inpt"
                id="phone"
                type="integer"
                name="phone"
                limit="10"
                placeholder="Mobile number"
                value=""
              ></input>
            </div>
            <div className="email-verify">
              <span>- OR -</span>
              <a onClick={() => setOtppopup(!otppopup)}>Sign in with email</a>
            </div>
            <div className="captcha-cont"></div>
            <br />
            <div className="btn-cont">
              <button
                onClick={() => setPhone(!phone)}
                className="otp-btn"
                type="submit"
              >
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
