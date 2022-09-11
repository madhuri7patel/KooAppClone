import React from 'react'
import "./LanguagePopup.css";
const LanguageButtons = ({lang, name}) => {
    return (
        <div>
            <div className="lang-button-wrap">
                <button disabled className="lang-btns-all" >
                    <div className="lang-btn-inner-all">
                        <span className="lang-btn-sp">
                            <span className="lang-t">{lang}</span>
                            <span className="lang-n">{name}</span>
                            <div className="lang-add-btn">
                                <div className="lang-add-btn-sp">
                                    <p>comming soon</p>
                                </div>
                            </div>
                        </span>
                    </div>
                </button>
                <hr />
            </div>
           
        </div>
    )
}

export default LanguageButtons
