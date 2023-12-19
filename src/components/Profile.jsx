import React from "react";
import messengerLogo from "../../public/messenger-logo.png";
import { useProfileContext } from "../context/SelectedProfileContext";

const styles = {
  container: {
    maxWidth: "350px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    borderRadius: "0.3rem",
    padding: "0.2rem 0.5rem",
    transition: "all 0.3s",
    cursor: "pointer",
  },
  profile: {
    width: "50px",
    height: "50px",
    border: "1px solid lightblue",
    borderRadius: "50%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: "1.1rem",
  },
  message: {
    fontSize: "0.9rem",
    color: "rgb(5,5,5)",
  },
};

export default function Profile({ data: { name, text, id }, newStyles = {} }) {
  const { profile, container } = newStyles;
  const { selectedProfile, setSelectedProfile } = useProfileContext();
  const {
    name: selecteProfilesName,
    text: selecteProfilestext,
    id: selecteProfilesId,
  } = selectedProfile;
  console.log(selecteProfilesName, selecteProfilestext,selecteProfilesId);

  const handleSelectFirendToMessage = (ID) => {
    console.log("first", ID);
  };

  return (
    <div
      onClick={() => handleSelectFirendToMessage(id)}
      style={{ ...styles.container, ...container }}
      className="hoverprofile"
    >
      <div style={{ ...styles.profile, ...profile }}>
        <img style={styles.profileImage} src={messengerLogo} alt="Image" />
      </div>
      <div>
        <h1 style={styles.name}>{name}</h1>
        <p style={styles.message}>{text}</p>
      </div>
    </div>
  );
}
