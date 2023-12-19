import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
