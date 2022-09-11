import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Feed.css";
import Viewpost from "./Viewpost";
export const Feed = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch("https://kooappcloneapis.herokuapp.com/userid/post")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json = json.reverse();
        setList(json);
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

  const userMail = localStorage.getItem("email");
  const userId = localStorage.getItem("userid");
  const handleAddLike = (likes, postid) => {
    if (userMail.length > 0) {
      console.log(likes, postid);
      const postData = {
        likes: likes + 1,
      };
      console.log(postData);
      fetch(`https://kooappcloneapis.herokuapp.com/userid/post/${postid}`, {
        method: "PATCH",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          getList();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Sign in first to like, post, share.");
    }
  };
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[40px] xl:ml-[300px]"
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
            {list.map((e) => (
              <Viewpost
                key={e._id}
                profile_pic={e.profile_pic}
                title={e.postdata}
                name={e.name}
                username={e.username}
                image={e.imageupload}
                userid={e.userid}
                postid={e._id}
                likes={e.likes}
                commentNo={e.commentNo}
                comments={e.comments}
                handleAddLike={handleAddLike}
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
