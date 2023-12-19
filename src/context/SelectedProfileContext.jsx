import { createContext, useContext, useState } from "react";

const profileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState({ id: 2, name: "Huda Mia", text: "This is Huda Mia" },);

  return (
    <profileContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfileContext = () => {
  const { selectedProfile, setSelectedProfile } = useContext(profileContext);
  return {selectedProfile, setSelectedProfile }
};

