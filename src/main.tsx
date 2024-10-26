import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes.tsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
