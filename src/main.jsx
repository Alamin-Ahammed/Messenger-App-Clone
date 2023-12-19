import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import App from "./App.jsx";
import "./index.css";
import { ProfileContextProvider } from "./context/SelectedProfileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);
