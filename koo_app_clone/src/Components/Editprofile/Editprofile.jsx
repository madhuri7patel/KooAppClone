import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FileBase64 from "react-file-base64";
import "./editProfile.css";
function Editprofile() {
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
        setUserList(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [inp, setinp] = useState(null);
  const handleChange = (e) => {
    let { name, value } = e.target;
    // value =
    //   type === "file" ? URL.createObjectURL(fileRef.current.files[0]) : value;
    console.log(inp);
    setinp({ ...inp, [name]: value });
  };

  const submittedData = (e) => {
    // var formData = new FormData();
    // formData.append("profile_pic", userId);
    // formData.append("profile_pic", fileRef.current.files[0]);
    // console.log(fileRef.current.files[0], "cat");
    //console.log(formData);
    const postData = {
      name: inp.name,
      username: inp.username,
      mobilenumber: inp.mobilenumber,
      profile_pic: inp.profile_pic,
    };
    console.log(postData);
    fetch(`https://kooappcloneapis.herokuapp.com/user/${userId}`, {
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
        alert("Profile Edited successfully");
        getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(inp);
    e.preventDefault();
  };

  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
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

              <h1>Back To Feed</h1>
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
              <img src={userList.profile_pic} alt="profile" />
              <div>
                <h1
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    margin: "30px 0 10px 25px",
                  }}
                >
                  {userList.name}
                </h1>
                <h1
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    margin: "10px 0 10px 25px",
                  }}
                >
                  {userList.username}
                </h1>
              </div>
            </div>

            <div className="user_info">
              <form onSubmit={submittedData}>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                    placeholder="Your Name???"
                  />
                </label>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700">
                    User Name
                  </span>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Whats Your Nick Name"
                  />
                </label>
                <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Choose Profile Pic
                  </span>
                  <FileBase64
                    name="profile_pic"
                    class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setinp({ ...inp, profile_pic: base64 })
                    }
                  />
                  {/* <input
                    type="file"
                    onChange={handleChange}
                    ref={fileRef}
                    name="profile_pic"
                    class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                  /> */}
                </label>
                <label class="block">
                  <span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Enter Mobile Number
                  </span>
                  <input
                    type="Number"
                    onChange={handleChange}
                    name="mobilenumber"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="98**78**98"
                  />
                </label>
                <button
                  class="bg-violet-500 hover:bg-violet-600"
                  type="submit"
                  name="Submit"
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
