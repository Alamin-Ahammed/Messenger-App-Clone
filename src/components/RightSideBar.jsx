import React from "react";
import Profile from "./Profile";
import { IoIosCall } from "react-icons/io";
import { PiVideoCameraFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { PiStickerFill } from "react-icons/pi";
import { MdGifBox } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Message from "./Message";

const styles = {
  RightSideBar: {
    width: "auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    width: "100%",
    height: "auto",
    borderBottom: "1px solid lightgrey",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "0.4rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: "fit-content",
  },
  profile: {
    width: "40px",
    height: "40px",
  },
  menu: {
    color: "#1877f2",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  footerMenuParent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  menuIcons: {
    display: "flex",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "50%",
    transition: "all 0.5s",
  },
  searchInputParent: {
    borderRadius: "1rem",
    backgroundColor: "rgb(240,240,240)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    margin: "1rem 0",
    flex: "12",
  },
  searchInput: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
  },
};

const messages = [
  {
    id: 1,
    userName: "alamin_ahammed",
    text: "Hello, There!",
  },
  {
    id: 2,
    userName: "huda mia",
    text: "Hello, There!",
  },
  {
    id: 3,
    userName: "alamin_ahammed",
    text: "Hello, There! this is nothing but a try. If you can't do, don't get hopeless. find a new way",
  },
  {
    id: 4,
    userName: "huda mia",
    text: "Hello, There!",
  },
  {
    id: 5,
    userName: "alamin_ahammed",
    text: "Hello, There!",
  },
  {
    id: 6,
    userName: "huda mia",
    text: "Hello, There! this is nothing but a try. If you can't do, don't get hopeless. find a new way",
  },
  {
    id: 7,
    userName: "huda mia",
    text: "Hello, There!",
  },
  {
    id: 8,
    userName: "alamin_ahammed",
    text: "Hello, There!",
  },
  {
    id: 9,
    userName: "huda mia",
    text: "Hello, There!",
  },
  {
    id: 10,
    userName: "alamin_ahammed",
    text: "Hello, There! this is nothing but a try. If you can't do, don't get hopeless. find a new way",
  },
  {
    id: 11,
    userName: "huda mia",
    text: "Hello, There!",
  },
  {
    id: 12,
    userName: "alamin_ahammed",
    text: "Hello, There!",
  },
  {
    id: 13,
    userName: "huda mia",
    text: "Hello, There! this is nothing but a try. If you can't do, don't get hopeless. find a new way",
  },
  {
    id: 14,
    userName: "huda mia",
    text: "Hello, There!",
  },
];

export default function RightSideBar() {
  const data = {
    id: '0',
    name: "Alamin Ahammed",
    text: "Active Now",
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log(e.target.usersMessage.value);
    e.target.usersMessage.value = ''
  };

  return (
    <div style={styles.RightSideBar}>
      <div style={styles.nav}>
        <Profile data={data} newStyles={styles} />
        <div style={styles.menu}>
          <div className="menuHover" style={styles.menuIcons}>
            <IoIosCall />
          </div>
          <div className="menuHover" style={styles.menuIcons}>
            <PiVideoCameraFill />
          </div>
          <div className="menuHover" style={styles.menuIcons}>
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* chat-box */}
      <div className="chat-box">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div style={styles.footerMenuParent}>
        <div style={{ flex: "2" }} className="messageMenuIcons">
          <div style={styles.menuIcons}>
            <FaCirclePlus />
          </div>
          <div style={styles.menuIcons}>
            <FaImage />
          </div>
          <div style={styles.menuIcons}>
            <PiStickerFill />
          </div>
          <div style={styles.menuIcons}>
            <MdGifBox />
          </div>
        </div>
        <form
          className="chatBox"
          style={styles.searchInputParent}
          onSubmit={handleSubmitMessage}
        >
          <input name="usersMessage" type="text" placeholder="Aa" style={styles.searchInput} />
          <FaSmile style={{ color: "#1877f2", cursor: "pointer" }} />
        </form>
        <div style={{ ...styles.menuIcons, flex: "1" }} className="likebtn">
          <AiFillLike style={{ color: "#1877f2", fontSize: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
}
