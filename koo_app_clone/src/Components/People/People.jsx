import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./People.css";
export const People = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getPeople();
    getUserData();
  }, []);
  const getPeople = () => {
    fetch("https://kooappcloneapis.herokuapp.com/people")
      .then((p) => p.json())
      .then((res) => {
        setList(res);
        console.log(res);
      });
  };

  const userId = localStorage.getItem("userid");
  const [following, setFollowing] = useState("");
  const [followingPeople, setFollowingPeople] = useState([]);
  const getUserData = () => {
    fetch(`https://kooappcloneapis.herokuapp.com/user/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setFollowing(res.following);
        setFollowingPeople(res.followingPeople);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(following);

  const userMail = localStorage.getItem("email");
  const handleAddFollowing = (eid, ename) => {
    if (userMail.length > 0) {
      const payload = {
        following: following + 1,
        followingPeople: [...followingPeople, eid],
      };
      fetch(`https://kooappcloneapis.herokuapp.com/user/${userId}`, {
        method: "PATCH",
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
          alert(`You are Following ${ename} 🥳`);
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

          <h1 className="peoplecan">People you can follow</h1>
          <div id="peoplecont" className="pb-20">
            {list.map((e) => (
              <div key={e._id}>
                <div className="showpeople">
                  <div className="profilepicandname">
                    <img src={e.profilepic} alt="profilepic" />
                    <div>
                      <div>
                        <h1>{e.name}</h1>
                        <img
                          src="https://kooapp-media-input.s3.ap-south-1.amazonaws.com/koo_verfication.png"
                          alt="profilepic"
                        />
                      </div>

                      <h2>{e.username}</h2>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleAddFollowing(e._id, e.name)}
                      className="followbtn"
                    >
                      + Follow
                    </button>
                  </div>
                </div>
                <hr />
              </div>
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
