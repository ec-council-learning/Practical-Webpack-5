//@ts-nocheck
import ReactDOM from "react-dom/client";
import { Root } from "./component/Root";
import { StrictMode } from "react";
import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import App1 from "app1/App1";

console.log("App1", App1);
// const App1 = React.lazy(() => import("app1/App1"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <App1 />,
        // element: <div>????</div>,
      },
      // {
      //   path: "/app2",
      //   element: <App2 />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
