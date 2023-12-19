import React from "react";
import Profile from "./Profile";
import { IoSearch } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useProfileContext } from "../context/SelectedProfileContext";

const styles = {
  container: {
    marginLeft: "2.5rem",
    maxWidth: "350px",
    height: "96vh",
    padding: "0 1rem",
    borderRight: "1px solid lightgrey",
  },
  leftSideHeading: {
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchInputParent: {
    border: "1px solid lightgrey",
    borderRadius: "1rem",
    backgroundColor: "rgb(240,240,240)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    margin: "1rem 0",
  },
  searchInput: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
  },
  profileParent: {
    overflowY: "scroll",
    height: "80vh",
  },
  edit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    // backgroundColor: 'rgb(240,240,240)',
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

const profiles = [
  { id: 0, name: "Alamin Ahammed", text: "This is Ahammed Alamin" },
  { id: 1, name: "Fajle Rabbi", text: "This is fajle Rabbi" },
  { id: 2, name: "Huda Mia", text: "This is Huda Mia" },
  { id: 3, name: "Habibullah", text: "This is Habibullah" },
  { id: 4, name: "Alamin Ahammed", text: "This is Ahammed Alamin" },
  { id: 5, name: "Fajle Rabbi", text: "This is fajle Rabbi" },
  { id: 6, name: "Huda Mia", text: "This is Huda Mia" },
  { id: 7, name: "Habibullah", text: "This is Habibullah" },
  { id: 8, name: "Alamin Ahammed", text: "This is Ahammed Alamin" },
  { id: 9, name: "Fajle Rabbi", text: "This is fajle Rabbi" },
  { id: 10, name: "Huda Mia", text: "This is Huda Mia" },
  { id: 11, name: "Habibullah", text: "This is Habibullah" },
  { id: 12, name: "Alamin Ahammed", text: "This is Ahammed Alamin" },
  { id: 13, name: "Fajle Rabbi", text: "This is fajle Rabbi" },
  { id: 14, name: "Huda Mia", text: "This is Huda Mia" },
  { id: 15, name: "Habibullah", text: "This is Habibullah" },
  { id: 16, name: "Alamin Ahammed", text: "This is Ahammed Alamin" },
  { id: 17, name: "Fajle Rabbi", text: "This is fajle Rabbi" },
  { id: 18, name: "Huda Mia", text: "This is Huda Mia" },
  { id: 19, name: "Habibullah", text: "This is Habibullah" },
];

export default function LeftSideBar({ HeadingText }) {
  const { selectedProfile, setSelectedProfile } = useProfileContext();

  const handleSelectProfileForMessaging = (data) => {
    console.log(data)
    setSelectedProfile({...data,text: 'Active Now'})
  }

  return (
    <div style={styles.container}>
      <div style={styles.leftSideHeading}>
        <h2>{HeadingText}</h2>
        <div style={styles.edit} className="editHover">
          <FiEdit />
        </div>
      </div>
      <div style={styles.searchInputParent}>
        <IoSearch />
        <input
          style={styles.searchInput}
          type="text"
          placeholder="search messenger"
        />
      </div>
      <div style={styles.profileParent}>
        {profiles.length === 0 ? (
          <h6>You have no friends. Search for some friends to talk with.</h6>
        ) : (
          profiles.map((data) => <div onClick={()=>handleSelectProfileForMessaging(data)} key={data.id} ><Profile  data={data} /></div>)
        )}
      </div>
    </div>
  );
}
