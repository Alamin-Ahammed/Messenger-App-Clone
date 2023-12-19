import React from "react";
import messengerLogo from "../../public/messenger-logo.png";

export default function Message({ message: { text, userName } }) {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        margin: "1rem 0",
        display: "flex",
      }}
      className={userName === "alamin_ahammed" ? "jc-f-end" : "jc-f-start"}
    >
      {userName === "alamin_ahammed" ? (
        ""
      ) : (
        <img
          style={{ width: "40px", height: "40px", marginLeft: "1rem" }}
          src={messengerLogo}
          alt="Image"
        />
      )}
      {userName === "alamin_ahammed" ? (
        <p className="userMessage">{text}</p>
      ) : (
        <p className="firendsMessage">{text}</p>
      )}
    </div>
  );
}
