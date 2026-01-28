import React, { useEffect, useState } from "react";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import { Outlet } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  return (
    <div
      className={`text-black `}
      style={{
        backgroundImage: "url('milk.svg'), url('Ellipse-d.svg')",
        backgroundPosition: "left 20px top -200px, right -450px top -150px",
        backgroundSize: "1200px 1200px, 1800px 1800px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
