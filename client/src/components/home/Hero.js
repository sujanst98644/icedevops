import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-[50px] py-8 flex flex-row space-x-20 h-[80vh]">
      <div className=" flex flex-col justify-center space-y-5 w-1/2">
        <h1 className="font-semibold">
          ICE CREAM SHOP
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna donec augue interdum
          volutpat ultrices et cursus. Massa vitae eget mollis malesuada neque
          sed vestibulum.
        </p>
        <p className="my-10 space-x-10">
          <Link to='/flavors'><button className="bg-[#E24B4B] h-12 w-36 hover:bg-[#D72323]">Order</button></Link>
          <Link to='/flavors'><button className=" h-12 w-36 hover:bg-[#D72323]">more flavor</button></Link>
        </p>
      </div>
      <div className="w-1/2 relative flex items-end">

        <img
          src="icecream.svg"
          alt=""
          className="left-1/2 w-[380px]"
        />
      </div>
    </div>
  );
};

export default Hero;
