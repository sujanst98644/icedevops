import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import axios from "axios";

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  console.log({
    username,
    email,
    password
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      return console.log("All fields are required");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    try {
       await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          username,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:");
      navigate("/signin");
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="absolute top-0 right-0 bg-white rounded-full p-2">
          <Link to="/">
            <GoX />
          </Link>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-pink-600">
            Create an Account
          </h1>
          <p className="text-md text-gray-600">
            Join us and enjoy our services.
          </p>
          <div className="flex items-center justify-center text-gray-600 font-semibold space-x-3 border mt-6 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <FcGoogle /> <p>Continue with Google</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mb-6">
          -------------or Sign up with email-------------
        </div>
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              className="border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="mail@abc.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="*************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="*************"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full py-2 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 transition duration-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/signin"
            className="font-semibold text-pink-600 ml-2 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
