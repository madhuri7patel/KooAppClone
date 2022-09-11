import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import "./LoginPopup.css";
export const EmailOtp = ({ settrigger, trigger, email, setEmail }) => {
  const { otp, setOtp } = useContext(UserContext);
  const [userOtp, setUserOtp] = useState("");
  function handleCheck() {
    console.log(otp, userOtp);
    if (otp == userOtp) {
      return <Navigate to="/feed" />;
    } else {
      alert("enter correct otp");
    }
    setOtp(null);
  }
  const userMail = localStorage.getItem("email");
  if (otp == userOtp) {
    console.log(userMail);
    localStorage.setItem("userid", userMail);
    fetch(`https://kooappcloneapis.herokuapp.com/user/email/${userMail}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.length > 0) {
          console.log("No Need");
          var hellouser = res[res.length - 1];
          localStorage.setItem("userid", hellouser._id);
          localStorage.setItem("email", hellouser.email);
          //return <Navigate to="/feed" />;
        } else {
          console.log("creating new user");
          const usernamename = "guest_" + Math.floor(Math.random() * 90) + 10;
          const payload = {
            name: usernamename,
            username: usernamename,
            email: userMail,
            mobilenumber: "",
            profile_pic:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU",
            followers: 0,
            following: 0,
          };
          fetch("https://kooappcloneapis.herokuapp.com/user", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              console.log(res);

              localStorage.setItem("userid", res._id);
              localStorage.setItem("email", res.email);
            })
            .catch((err) => {
              console.log(err);
            });
          //return <Navigate to="/feed" />;
        }
        return <Navigate to="/feed" />;
      })
      .catch((err) => {
        console.log(err);
      });

    return <Navigate to="/feed" />;
  }
  return trigger ? (
    <div>
      <div id="unblurred" className="popup-login">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Enter otp sent to Email</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    settrigger(false);
                    setEmail(!email);
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
                type="integer"
                name="otp"
                // limit="10"
                placeholder="Enter otp"
                onChange={(e) => setUserOtp(e.target.value)}
                style={{ marginRight: "24%" }}
              ></input>
            </div>
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
              <button onClick={handleCheck} className="otp-btn" type="submit">
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
