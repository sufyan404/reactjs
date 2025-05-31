import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Input from "./Input";
import Logo from "./Logo";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full min-h-screen py-8 text-center bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col justify-center items-center">
      <div className="p-8 bg-white rounded-xl shadow-2xl w-full max-w-96">
        <div className="mb-2 flex justify-center items-center">
          <span className="flex justify-center w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
          Sign in to you account
        </h2>
        <p className="text-lg text-slate-500">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <label className="block text-left text-sm font-medium text-slate-700">
              Email
            </label>
            <Input
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
             placeholder-gray-400 placeholder:italic 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             transition-colors duration-200"
              {...register("email", {
                required: true,
                validate: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              })}
            />
            <label className="block text-left text-sm font-medium text-slate-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
             placeholder-gray-400 placeholder:italic 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             transition-colors duration-200"
              {...register("password", {
                required: true,
              })}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
