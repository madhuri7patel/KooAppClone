import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState(null);
  const handleName = (nm) => {
    setName(nm);
  };
  const handleUsername = (usrnm) => {
    setUsername(usrnm);
  };

  const [comment, setComment] = useState("");
  const addCommentToPost = (add) => {
    setComment(add);
  };

  const value = {
    name,
    username,
    otp,
    setOtp,
    handleName,
    handleUsername,
    comment,
    addCommentToPost,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
