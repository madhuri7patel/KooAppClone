import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import UPfeed from "../UPelections/UPfeed";
import Widgets from "../Widgets/Widgets";
import "./Following.css";
export const Following = () => {
  let [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(`https://kooappcloneapis.herokuapp.com/following`)
      .then((d) => d.json())
      .then((res) => {
        setNews(res);
        console.log(res);
      });
  };
  var mybutton = document.getElementById("backtotopbtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 900 ||
      document.documentElement.scrollTop > 900
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          <div
            id="header"
            className="bg-[#F8F7F3] border-gray-700 sticky top-0 z-40 "
          >
            <Link to="/feed">
              <h2
                id="heads"
                className="text-lg sm:text-xl text-[#7D8889] font-bold"
              >
                Feed
              </h2>
            </Link>

            <Link to="/people">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold "
              >
                People
              </h2>
            </Link>

            <Link to="/trending">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Trending
              </h2>
            </Link>

            <Link to="/upelections">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                UP Election
              </h2>
            </Link>
            <Link to="/videos">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Videos
              </h2>
            </Link>

            <Link to="/polls">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Polls
              </h2>
            </Link>

            <Link to="/cricket">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Cricket
              </h2>
            </Link>

            <Link to="/following">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold"
              >
                Following
              </h2>
            </Link>

            <Link to="/new">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                New
              </h2>
            </Link>

            <Link to="/exclusive">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold"
              >
                Exclusive
              </h2>
            </Link>
          </div>
          <button
            onClick={topFunction}
            id="backtotopbtn"
            className="backtotop  sticky top-20 "
          >
            Back To Top
          </button>
          <Link to="/addinput">
            <div className="inputbar">
              <div style={{ display: "flex" }}>
                <img
                  className="iconimage"
                  src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
                  alt="iconimage"
                />
                <p>What's on your mind...</p>
              </div>
              <div>
                <img
                  className="addiconlogo"
                  src="https://www.kooapp.com/img/koo_create_24.svg"
                  alt="addlogo"
                />
              </div>
            </div>
          </Link>
          <div className="pb-72">
            {news.map((e) => (
              <UPfeed
                key={e.publishedAt}
                head={e.source.name}
                author={e.author}
                brif={e.content}
                image={e.urlToImage}
              />
            ))}
          </div>
        </div>
        <Widgets />
      </div>
    </div>
  );
};

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSp6ikXSB0cw5YPtaassBzIdUtRL6IGSw",
  authDomain: "kooappclone.firebaseapp.com",
  projectId: "kooappclone",
  storageBucket: "kooappclone.appspot.com",
  messagingSenderId: "389123845638",
  appId: "1:389123845638:web:eeb76f933d15f3beb59d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/
