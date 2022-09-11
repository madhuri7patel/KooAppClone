import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Comment from "./Comment";
import "./Viewpost.css";
function Viewpost({
  profile_pic,
  name,
  username,
  userid,
  postid,
  title,
  image,
  likes,
  commentNo,
  comments,
  handleAddLike,
}) {
  const { addCommentToPost } = useContext(UserContext);
  const handleComment = (postid) => {
    localStorage.setItem("postid", postid);
  };
  return (
    <div className="maincont">
      <div className="cont1">
        {image && profile_pic ? (
          <img className="profilepic" src={profile_pic} alt="postimg" />
        ) : profile_pic ? (
          <img className="profilepic" src={profile_pic} alt="postimg" />
        ) : (
          <img
            className="profilepic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"
            alt="postimg"
          />
        )}
        <div>
          {name ? (
            <h1 className="name">{name}</h1>
          ) : (
            <h1 className="name">{username}</h1>
          )}
          {/* <h1 className="name">{name}</h1> */}
          <h2 className="username">{username}</h2>
        </div>
      </div>
      <div className="cont2">
        <h1>{title}</h1>
      </div>
      <div className="cont3">
        {image ? (
          <img src={image} alt="postimg" />
        ) : (
          ""
          //   <img
          //     className="profilepic"
          //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"
          //     alt="postimg"
          //   />
        )}
      </div>
      <div className="cont4">
        <div>
          <img
            onClick={() => handleAddLike(likes, postid)}
            src="https://www.kooapp.com/img/cardFooterIcons/likeactive_new.svg"
            alt="like"
          />
          <h1>{likes}</h1>
        </div>
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/comment_new.svg"
            alt="comment"
          />
          <h1>{commentNo}</h1>
        </div>
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/rekoo_active_new.svg"
            alt="swap"
          />
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?text=Check%20this%20post%20from%20Republic%20on%20Koo%20App%3A%0A%0A%22%20%23EndHinduphobia%20%7C%20Out%20of%20all%20issues%20concerning%20our%20country%2C%20...%22%0Ahttps%3A%2F%2Fwww.kooapp.com%2Fkoo%2Frepublic%2Fb011ac68-b01b-416a-b8e1-e6441bf9d597%0A%0ADownload%20Koo%20App%3A%20%0Ahttp%3A%2F%2Fwww.kooapp.com%2Fdnld%0A%0A%20%20"
          >
            <img
              className="whatsappicon"
              src="https://www.kooapp.com/img/cardFooterIcons/whatsapp_new.svg"
              alt="whatsapp"
            />
          </a>
        </div>
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/share_new.svg"
            alt="share"
          />
        </div>
      </div>
      {/* <Comment /> */}
      <Link to="/comments">
        <div className="cont5" onClick={() => handleComment(postid)}>
          <img
            src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
            alt="comment"
          />
          <h1>Write Your Comment...</h1>
        </div>
      </Link>
    </div>
  );
}

export default Viewpost;
