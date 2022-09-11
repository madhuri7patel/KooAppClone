import React from "react";
import "./UPfeed.css";
function UPfeed({ head, author, brif, image }) {
  return (
    <div className="maincont">
      <div className="cont1">
        {image ? (
          <img className="profilepic" src={image} alt="postimg" />
        ) : (
          <img
            className="profilepic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"
            alt="postimg"
          />
        )}

        <div>
          <h1 className="name">{head}</h1>
          <h2 className="username">{author}</h2>
        </div>
      </div>
      <div className="cont2">
        <h1>{brif}</h1>
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
        {/* 
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MvKGlOE7ERr4LBkTnMLIJgHZE_1zewZHvw&usqp=CAU"
          alt="postedimg"
        /> */}
      </div>
      <div className="cont4">
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/likeactive_new.svg"
            alt="like"
          />
          {/* <h1>2</h1> */}
        </div>
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/comment_new.svg"
            alt="comment"
          />
          {/* <h1>2</h1> */}
        </div>
        <div>
          <img
            src="https://www.kooapp.com/img/cardFooterIcons/rekoo_active_new.svg"
            alt="swap"
          />
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?text=Check%20this%20post%20from%20Republic%20on%20Koo%20App%3A%0A%0A%22%20%23EndHinduphobia%20%7C%20Out%20of%20all%20issues%20concerning%20our%20country%2C%20...%22%0Ahttps%3A%2F%2Fwww.kooapp.com%2Fkoo%2Frepublic%2Fb011ac68-b01b-416a-b8e1-e6441bf9d597%0A%0ADownload%20Koo%20App%3A%20%0Ahttp%3A%2F%2Fwww.kooapp.com%2Fdnld%0A%0A%20%20">
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
      <div className="cont5">
        <img
          src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
          alt="comment"
        />
        <h1>Write Your Comment...</h1>
      </div>
    </div>
  );
}

export default UPfeed;
