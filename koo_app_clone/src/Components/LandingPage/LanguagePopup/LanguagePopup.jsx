import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import "./LanguagePopup.css";
import LanguageButtons from "./LanguageButtons";

export const LanguagePopup = ({ setLang, lang }) => {
  return lang ? (
    <div>
      <div id="unblurred" className="popup-lang">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Select Language</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    setLang(false);
                  }}
                />
              </button>
            </div>
            {/* <hr /> */}
            <div className="lang-cont">
              <p className="lang-p">View languages of</p>
              <div className="cont-div">
                <div className="cont-div-wrap">
                  <span className="main-cont-s">
                    <span className="ind-s">
                      <div className="sp-flag">🇮🇳</div>
                      <div className="sp-cont">India</div>
                    </span>
                  </span>
                </div>

                <div className="cont-div-wrap" style={{ marginLeft: "10px" }}>
                  <span
                    className="main-cont-s"
                    style={{
                      backgroundColor: "#e0e0e0",
                      color: "black",
                      border: "2px solid #e0e0e0",
                    }}
                  >
                    <span className="ind-s">
                      <div className="sp-flag">🇳🇬</div>
                      <div className="sp-cont">Nigeria</div>
                    </span>
                  </span>
                </div>
              </div>

              <div className="lang-bottom">
                <div className="lang-bottom-wrap">
                  <div className="lang-available">Available Languages</div>
                  <hr />
                  <div className="lang-button-wrap">

                    <button className="lang-btns" >

                      <div className="lang-btn-inner">
                        <span className="lang-btn-sp">
                          <span className="lang-t">English</span>
                          <span className="lang-n">(English)</span>
                          <div className="lang-add-btn">
                            <div className="lang-add-btn-sp">
                              <img
                                className="lang-img-btn"
                                src="https://www.kooapp.com/img/checkedYellow.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </button>
                    <hr />
                  </div>
                  <LanguageButtons lang={"हिंदी"} name="(Hindi)" />
                  <LanguageButtons lang={"ಕನ್ನಡ"} name="(Kannada)" />
                  <LanguageButtons lang={"தமிழ்"} name="(Tamil)" />
                  <LanguageButtons lang={"मराठी"} name="(Marathi)" />
                  <LanguageButtons lang={"বাংলা"} name="(Bangla)" />
                  <LanguageButtons lang={"অসমীয়া"} name="(Assamese)" />
                  <LanguageButtons lang={"తెలుగు"} name="(Telugu)" />
                  <LanguageButtons lang={"ગુજરાતી"} name="(Gujrati)" />
                  <LanguageButtons lang={"ਪੰਜਾਬੀ"} name="(Punjabi)" />
                </div>
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
