
import React, { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div
      className={` dark:text-white font-sora min-h-screen min-w-full bg-[#F2F2F2] dark:bg-[#283646] min-h-screen min-w-full`}
      style={{
        backgroundImage: "url('milk.svg'), url('Ellipse-d.svg')",
        backgroundPosition: "left 20px top -200px,right -450px top -150px",
        backgroundSize: "1200px 1200px, 1800px 1800px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div>
        <div className="flex flex-col justify-between">
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
        
        <button
        onClick={() => toggleDark()}
        className="bg-slate-400 text-2xl rounded-full p-2 fixed bottom-4 right-4 dark:text-white"
      >
        {
          Dark && <IoSunny /> // render sunny when dark is true
        }
        {
          !Dark && <IoMoon /> // render moon when dark is false
        }
      </button>
      </div>
    </div>
  );
}

 export default App;
