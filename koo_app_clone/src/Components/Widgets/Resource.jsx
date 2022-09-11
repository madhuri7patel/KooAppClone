import React from 'react'
import { Link } from "react-router-dom"
import "./Resource.css"

function Resource() {
    return <div>
        <div className="Head" >
            <Link to="/feed" >
                <img className="koo-icon" src="https://www.kooapp.com/assets/2d634360.svg" alt="3" />
            </Link>

            <p className="who" >Who we are</p>
            <p>Community Guidelines</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Community</p>
            <p>Elections 2022</p>
            <p>Resources</p>
            <p>Contact Us</p>
            <p>English</p>

        </div>
        <div className="background">
            <div className="heading" >Your Journey Begins Here</div>
            <div className="text">

                <div>Koo is a micro-blog in Indian languages. We are here to help Indians express themselves in the easiest way possible with the objective of democratizing their voice. Share your thoughts in text, audio or video.</div>
                <div>Some of the most prominent faces of India use Koo. You will also find millions of others from all walks of life. Koo is home to the Voices of India. Follow people you like, know what's on their mind and share your thoughts with India too.</div>
                <div>Let's Koo together!</div>
                <Link to="/feed" >  <button className="explore" >Explore Koo</button></Link>
            </div>

        </div>
        <div className="end" >'Koo' and are the exclusive trademarks of Bombinate Technologies Private Limited.
            © Copyright 2022 Bombinate Technologies Private Limited. All rights reserved.</div>


    </div>


}

export default Resource