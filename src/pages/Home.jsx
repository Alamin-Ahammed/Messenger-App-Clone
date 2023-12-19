import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{flex:'1'}}>
        <LeftSideBar HeadingText={"Chats"} />
      </div>
      <div style={{ flex: "3" }}>
        <RightSideBar />
      </div>
    </div>
  );
}
