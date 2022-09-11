import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Profile.css";
export const Profile = () => {
  const userMail = localStorage.getItem("email");
  const userId = localStorage.getItem("userid");
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    fetch(`https://kooappcloneapis.herokuapp.com/user/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setUserList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(userList.name);
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          <div className="profilehead1">
            <div>
              <Link to="/feed">
                <img
                  className="profilehead1img"
                  src="https://www.kooapp.com/img/ic_back.svg"
                  alt="backtofeed"
                />
              </Link>

              <h1>{userList.name}</h1>
            </div>
            <div>
              <img
                className="logo"
                src="https://www.kooapp.com/img/stats.svg"
                alt="fake"
              />
              <img
                className="logo"
                src="https://www.kooapp.com/img/kuhuShare.svg"
                alt="fake"
              />
              <img
                className="logo"
                src="https://www.kooapp.com/assets/5dc2bdc8.svg"
                alt="fake"
              />
            </div>
          </div>
          <div className="profilehead2">
            <div className="profilehead21">
              {userList.profile_pic ? (
                <img
                  src={userList.profile_pic}
                  alt="profile"
                  className="profilePicMain"
                />
              ) : (
                <img
                  src="https://www.kooapp.com/img/profilePlaceholder.svg"
                  alt="profile"
                />
              )}
              {/* <img
                src="https://www.kooapp.com/img/profilePlaceholder.svg"
                alt="profile"
              />
              <img src={userList.profile_pic} alt="profile" /> */}

              <button>
                <Link to="/editprofile">Edit Profile </Link>
              </button>
            </div>
            <h1>{userList.name}</h1>
            <h2>{userList.username}</h2>
            <p>Koo Your Opinion</p>
            <div className="profilehead22">
              <img
                src="https://www.kooapp.com/img/ic_calendar.svg"
                alt="calender"
              />
              <h1>Joined on {userList.createdAt}</h1>
            </div>
            <div className="profilehead23">
              <div>
                <h1>{userList.followers} Followers</h1>
                <img
                  className="following"
                  src="https://user-images.githubusercontent.com/91772445/150653867-e8168210-8ce5-486e-8ccf-2549b43b070e.jpg"
                  alt="Followers"
                />
              </div>
              <div>
                <h1>{userList.following} Following</h1>
                <img
                  className="following"
                  src="https://user-images.githubusercontent.com/91772445/150653772-4f2fce31-7383-4f2f-9dc1-3d8467619e20.jpg"
                  alt="following"
                />
              </div>
            </div>
          </div>
          <div className="profilehead3">
            <div>
              <img src="https://www.kooapp.com/assets/57662a37.svg" alt="koo" />
              <h3 style={{ marginTop: "1px" }}>Koo</h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/img/Like1.5.svg" alt="koo" />
              <h3>Liked</h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/img/Comment1.5.svg" alt="koo" />
              <h3>Re-Koo & Comment </h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/img/Like1.5.svg" alt="koo" />
              <h3>Mentions</h3>
            </div>
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
