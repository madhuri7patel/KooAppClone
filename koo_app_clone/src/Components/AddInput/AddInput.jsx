import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Addinput.css";
import FileBase64 from "react-file-base64";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import "./Modal.css";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

// madhuri

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";
function AddInput() {
  const [input, setInput] = useState("");
  const [picprofile, setPicprofile] = useState("");
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(0);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const userMail = localStorage.getItem("email");
  const userId = localStorage.getItem("userid");
  const [isListening, setIsListening] = useState(false);
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
  const sendPost = () => {
    if (loading) return;
    setLoading(true);

    console.log(userMail.length);
    if (userMail.length > 0) {
      console.log(selectedFile);
      const postData = {
        profile_pic: userList.profile_pic,
        postdata: input,
        name: userList.name,
        username: userList.username,
        imageupload: picprofile.imageupload,
        likes: 0,
        commentNo: 0,
        comments: "",
        userid: userId,
      };
      console.log(postData);
      fetch(`https://kooappcloneapis.herokuapp.com/userid/post`, {
        method: "POST",
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
          alert("Koo Posted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(`Please Sign in first to make post`);
    }

    // const docRef = await addDoc(collection(db, "posts"), {
    //   id: session.user.uid,
    //   username: session.user.name,
    //   userImg: session.user.image,
    //   tag: session.user.tag,
    //   text: input,
    //   timestamp: serverTimestamp(),
    // });

    //console.log(downloadURL);

    // const imageRef = ref(storage, `posts/image`);

    // if (selectedFile) {
    //   await uploadString(imageRef, selectedFile, "data_url").then(async () => {
    //     const downloadURL = await getDownloadURL(imageRef);
    //     //console.log(downloadURL);
    //     //console.log(selectedFile);
    //     await updateDoc(doc(db, "posts/image"), {
    //       image: downloadURL,
    //     });
    //   });
    // }

    // console.log(selectedFile);
    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const handleChange = (e) => {
    setLength(e.target.value.length);
    setInput(e.target.value);
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleInputLenght = () => {
    setLength(input.length);
  };
  useEffect(() => {
    handleInputLenght();
  }, [input]);
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setInput(input + transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log(modal);
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div id="input_cont">
      <div
        id="inputCont"
        className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[490px]"
      >
        <div id="cont1">
          <div id="insidecont1">
            <Link to={"/feed"}>
              <img
                className="returnhomelogo"
                src="https://www.kooapp.com/img/backArrowMinimal.svg"
                alt="tohome"
              />
            </Link>
            <img
              src="https://www.kooapp.com/img/profilePlaceholder.svg"
              alt="logo"
            />
          </div>
          <div className="postButtonDiv">
            <button className="postButton" onClick={sendPost}>
              <img
                src="https://www.kooapp.com/img/postIconNew.svg"
                alt="postlogo"
              />
              Post
            </button>
          </div>
        </div>
        <div id="cont2">
          <h1>+</h1>
          <p className="decoration-indigo-900 border-gray-700  underline underline-offset-8 ">
            English
          </p>
        </div>
        <div id="cont3">
          <textarea
            style={{ padding: "10px" }}
            value={input}
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
            placeholder="What's on your mind..."
          />
          <img
            onClick={() => setIsListening((prevState) => !prevState)}
            src="https://www.kooapp.com/img/recordAudio.svg"
            alt="speaker"
          />
        </div>

        <div id="inputcont4">
          <div>
            {/* <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
            /> */}
            <FileBase64
              name="imageupload"
              type="file"
              multiple={false}
              //hidden
              onDone={({ base64 }) => setPicprofile({ imageupload: base64 })}
            />
          </div>
          <div onClick={() => filePickerRef.current.click()}>
            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
            />
            <img
              src="https://www.kooapp.com/img/createMedia-video-new.svg"
              alt="attachevideo"
            />
          </div>
          <div>
            <img
              onClick={toggleModal}
              src="https://www.kooapp.com/img/createMedia-link-new.svg"
              alt="attachelink"
            />
          </div>

          <div onClick={() => setShowEmojis(!showEmojis)}>
            <img
              style={{ marginRight: "5px", marginLeft: "-5px" }}
              id="emoji"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Hbj3XayrW6APP7KSIWjbK5U-ovvwTK-uQjKJUmysjCl-EfAmyFEXDb3nOYOys5q2rZU&usqp=CAU"
              alt="attacheemoji"
            />
          </div>
          <div>
            <img
              src="https://www.kooapp.com/img/polls-new.svg"
              alt="attachepoll"
            />
          </div>
          <div>
            <p className="ppp">{length}/400</p>
          </div>

          {showEmojis && (
            <Picker
              onSelect={addEmoji}
              style={{
                position: "absolute",
                marginTop: "40px",
                marginLeft: 100,
                maxWidth: "520px",
                borderRadius: "17px",
              }}
              theme="dark"
            />
          )}

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>

              <div className="modal-content">
                <div className="modalcont1">
                  <h1>Attach Link</h1>
                  <img
                    className="closeimg"
                    onClick={toggleModal}
                    src="https://www.kooapp.com/img/close.svg"
                    alt="close"
                  />
                </div>
                <div className="modalcont2">
                  <input type="text" placeholder="Attach Link" />
                  <button>Save</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddInput;
