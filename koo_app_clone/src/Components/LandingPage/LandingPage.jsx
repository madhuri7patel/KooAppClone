import React, { useEffect, useState } from "react";
import "firebase/auth";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { PhoneLogin } from "./PhonePopup/PhoneLogin";
import { EmailLogin } from "./EmailPopup/EmailLogin";
import { EmailOtp } from "./EmailPopup/EmailOtp";
import { PhoneOtp } from "./PhonePopup/PhoneOtp";
import { LanguagePopup } from "./LanguagePopup/LanguagePopup";

const LandingPage = () => {
  const [popup, setPopup] = useState(false);
  const [lang, setLang] = useState(false);
  const [phone, setPhone] = useState(true);
  const [email, setEmail] = useState(true);
  const [otppopup, setOtppopup] = useState(true);
  return (
    <div>
      <div className="navContainer">
        <div className="navWrap">
          <div className="koologo-name">
            <a href="/">
              <img
                className="logoKoo-home"
                src="https://www.kooapp.com/img/logoKuSolidOutline.svg"
                alt="Koo"
              />
              <p>
                {" "}
                <b>
                  {" "}
                  <b> Koo</b>{" "}
                </b>
              </p>
            </a>
          </div>

          <div className="koosearch">
            <input className="koo-srch-inp" type="text" placeholder="Search" />
          </div>

          <div className="kooicons">
            <img src="https://www.kooapp.com/assets/bce0173d.svg" alt="feeed" />
            <img
              src="https://www.kooapp.com/assets/8a272ace.svg"
              alt="explore"
            />
            <img
              src="https://www.kooapp.com/assets/d6c4a8f9.svg"
              alt="language"
              onClick={() => {
                setLang(true);
              }}
            />
            <img
              src="https://www.kooapp.com/assets/15ce681a.svg"
              alt="notification"
            />
            <img
              src="https://img.icons8.com/small/96/000000/user-male-circle.png"
              alt="profile"
              onClick={() => {
                setPopup(true);
              }}
            />
          </div>
        </div>
        {/* {lang ? (  */}
        <LanguagePopup setLang={setLang} lang={lang}></LanguagePopup>
        {/* //   ) : ("")
      // } */}
        {otppopup ? (
          phone ? (
            <PhoneLogin
              trigger={popup}
              setPhone={setPhone}
              phone={phone}
              settrigger={setPopup}
              otppopup={otppopup}
              setOtppopup={setOtppopup}
            ></PhoneLogin>
          ) : (
            <PhoneOtp
              trigger={popup}
              setPhone={setPhone}
              phone={phone}
              settrigger={setPopup}
            ></PhoneOtp>
          )
        ) : email ? (
          <EmailLogin
            trigger={popup}
            setEmail={setEmail}
            email={email}
            settrigger={setPopup}
            otppopup={otppopup}
            setOtppopup={setOtppopup}
          ></EmailLogin>
        ) : (
          <EmailOtp
            trigger={popup}
            setEmail={setEmail}
            email={email}
            settrigger={setPopup}
          ></EmailOtp>
        )}
      </div>

      <div className="pg-container">
        <div className="wrap-pg">
          <div className="center-container">
            <div className="cent-box">
              <div className="cent-box-in">
                <img
                  className="cent-box-img"
                  src="https://www.kooapp.com/img/logoSolidOutline.png"
                  alt="logo"
                />
              </div>
            </div>
            <br />

            <Link to="/feed">
              <button className="cent-box-btn">Go to Feed </button>
            </Link>

            <a href="/">
              <img
                className="store-btn"
                src="https://www.kooapp.com/img/googlePlayBadge.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="store-btn"
                src="https://www.kooapp.com/img/appStoreBadge.png"
                alt=""
              />
            </a>
          </div>
          <div style={{ height: "200px" }}></div>
          <div></div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-wrap">
          <div className="footer-list">
            <Link to="/about">
              <p style={{ color: "white" }}>About</p>
            </Link>
            <a href="/">In the Press</a>
            <Link to="/resource">
              <p style={{ color: "white" }}>Resource Center</p>
            </Link>
            <Link to="/contact">
              <p style={{ color: "white" }}>Contact us</p>
            </Link>
            <Link to="/faq">
              <p style={{ color: "white" }}>FAQs</p>
            </Link>
            <Link to="/sitemap">
              <p style={{ color: "white" }}>Sitemap</p>
            </Link>
          </div>
          <div className="footer-cp-rt">Copyright Koo 2022 ©</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
