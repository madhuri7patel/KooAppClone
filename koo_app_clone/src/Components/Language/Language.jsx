import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanguagePopup } from "../LandingPage/LanguagePopup/LanguagePopup";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Language.css";
export const Language = () => {
  const [lang, setLang] = useState(true);
  console.log(lang);
  const handleClick = () => {
    console.log("hello");
    setLang(!lang);
  };
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          {/* <div
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
          </div> */}

          {/* <Link to="/addinput">
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
          </Link> */}
          <div onClick={handleClick}>
            <img
              src="https://images.saymedia-content.com/.image/t_share/MTc0NDc1NTU1NzA4Njc1NDMy/what-is-language-the-five-basic-elements-of-language-defined.jpg"
              alt="language"
              onClick={handleClick}
              style={{
                height: "150px",
                width: "600px",
                marginLeft:"100px"
              }}
            />
          </div>

          <div
            style={{
              marginTop: "-55px",
              marginLeft: "-370px",
            }}
          >
            <LanguagePopup setLang={setLang} lang={lang}></LanguagePopup>
          </div>
          <div className="pb-72">
            {/* {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))} */}
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
