import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteAbout from "./routes/RouteAbout";
import RouteSkills from "./routes/RouteSkills";
import RouteProjects from "./routes/RouteProjects";
import RouteContact from "./routes/RouteContact";
import Error from "../src/routes/Error";

const router = createBrowserRouter([
  {
    path: "/portfolio_js",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <RouteAbout />,
  },
  {
    path: "/skills",
    element: <RouteSkills />,
  },

  {
    path: "/projects",
    element: <RouteProjects />,
  },

  {
    path: "/contact",
    element: <RouteContact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
