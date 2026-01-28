import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { GoX } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = res.data;

      if (!token) {
        throw new Error("Token not received");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("user", JSON.stringify(user));

      navigate(user.role === "admin" ? "/admin" : "/");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-2 shadow-xl h-screen relative">

      <div
        className="hidden md:flex text-[#73114B] flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('planet.svg'), url('dcircle.svg'), url('circle.svg'), url('hand.svg')",
          backgroundPosition:
            "left -40px top -40px, right 170px top 220px, right 170px top 120px, right 20px top -50px",
          backgroundSize:
            "200px 200px, 45px 45px, 390px 390px, 650px 650px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-extrabold text-3xl absolute bottom-16">
          Treat yourself a dessert.
        </p>
        <p className="text-xl absolute bottom-10">
          Start for free and get attractive offers from the community
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-6">

          <div className="text-center">
            <h1 className="text-3xl font-semibold">Login to your Account</h1>
            <p className="text-gray-500">See what is going on.</p>

            <div className="flex items-center justify-center gap-2 border mt-6 py-2 rounded-md cursor-pointer">
              <FcGoogle />
              <p>Continue with Google</p>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400">
            — or sign in with email —
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label>Email</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                className="w-full border rounded-md px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="w-full py-2 bg-[#7F265B] text-white rounded-md">
              Login
            </button>
          </form>

          <p className="text-center text-gray-500">
            Not registered yet?{" "}
            <Link to="/signup" className="text-[#7F265B] font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <Link className="absolute top-10 right-10 text-xl" to="/">
        <GoX />
      </Link>
    </div>
  );
};

export default Signin;
