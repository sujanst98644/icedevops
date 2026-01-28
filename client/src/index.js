import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "./index.css";
import App from "./App";
import Home from "./pages/home";
import Flavors from "./pages/flavors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/signin";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Signup from "./pages/signup";
import ProtectedRoute from "./routes/protectRoutes";
import Upload from "./pages/upload";
import RequireAuth from "./routes/protectRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/flavors", element: <Flavors /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        element: <RequireAuth role="user" />,
        children: [{ path: "/upload", element: <Upload /> }],
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [{ path: "/user", element: <Home /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
