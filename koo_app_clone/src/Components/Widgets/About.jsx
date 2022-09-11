import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

function About() {
  return <div>

    <div id="back-to-feed" >
      <Link to="/feed" >
        <img className="icon" src="https://www.kooapp.com/assets/2d634360.svg" alt="3" />
      </Link>

      <Link to="/feed" >
        <button className="btn"> 🢀 Back To Feed</button>
      </Link>
    </div>
    <div className="about-us" >About Us</div>
    <div className="matter">
      <div>Koo is a micro-blog in Indian languages. We are here to help Indians express themselves in the easiest way possible with the objective of democratizing their voice. Share your thoughts in text, audio or video.</div>
      <div>Some of the most prominent faces of India use Koo. You will also find millions of others from all walks of life. Koo is home to the Voices of India. Follow people you like, know what's on their mind and share your thoughts with India too.</div>
      <div>Let's Koo together!</div>
    </div>
    <div className="all-queries" >
      <Link to="/about"> <span> About </span> </Link>  <Link to="/contact"> <span> Contact Us  </span></Link>  <Link to="/resource"><span>Resource Center</span></Link>  <Link to="/sitemap"><span>Sitemap</span></Link>  <Link to="/resource"><span>FAQs</span></Link>
    </div>
    <div className="copy">Copyright Koo 2022 ©</div>
  </div >
}


export default About;
