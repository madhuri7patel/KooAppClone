import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Notification.css";
export const Notification = () => {
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
            <h1
              style={{ fontSize: "20px" }}
              className="notificationcont   underline underline-offset-8 "
            >
              Notification
            </h1>
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
