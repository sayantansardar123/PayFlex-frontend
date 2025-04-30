import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromNavbar = location.state?.fromNavbar === false;

  const baseURL = import.meta.env.VITE_BASEURL;

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    if (!formData.email) {
      toast.error("Please enter an email address.");
      return;
    }
    try {
      const { data } = await axios.post(
        `${baseURL}mail/send-otp`,
        {
          email: formData.email,
        },
        { withCredentials: true }
      );
      toast.success(data.message);
      setOtpSent(true);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    if (!formData.otp) {
      toast.error("Please enter OTP.");
      return;
    }
    try {
      const { data } = await axios.post(
        `${baseURL}mail/verify-otp`,
        { email: formData.email, otp: formData.otp },
        { withCredentials: true }
      );
      toast.success(data.message);
      setOtpVerified(true);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Invalid OTP.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!otpVerified) return toast.error("Please verify your OTP first.");
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match!");
    try {
      const { fullName, email, password } = formData;
      const { data } = await axios.post(
        `${baseURL}auth/register`,
        {
          username: fullName,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Account registered successfully.");
        setIsLogin(true);
        setFormData({
          fullName: "",
          email: "",
          otp: "",
          password: "",
          confirmPassword: "",
        });
        setOtpSent(false);
        setOtpVerified(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  // const baseURL = import.meta.env.VITE_BASEURL;
  // const baseURL = process.env.REACT_APP_BASEURL;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      console.log("Base URL:", baseURL);
      const { data } = await axios.post(
        `${baseURL}auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        navigate("/home", { state: { fromNavbar: true } });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data?.message === "User not register") {
        toast.error("Email not registered.");
      } else if (error.response?.data?.message === "Password Invalid") {
        toast.error("Invalid password.");
      } else {
        toast.error(error.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <div
      className={`${
        fromNavbar
          ? "bg-white p-4"
          : "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      }`}
    >
      <Toaster position="top-center" />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({
                  fullName: "",
                  email: "",
                  otp: "",
                  password: "",
                  confirmPassword: "",
                });
                setOtpSent(false);
                setOtpVerified(false);
              }}
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          <div className="rounded-md shadow-sm space-y-4">
            {!isLogin && (
              <>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>

                <div className="flex gap-2 items-center">
                  <div className="relative flex-1">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Email Address"
                    />
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={sendOtp}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                  >
                    <Send size={18} />
                  </motion.button>
                </div>

                {otpSent && !otpVerified && (
                  <div className="flex gap-2 items-center">
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      required
                      value={formData.otp}
                      onChange={handleChange}
                      className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Enter OTP"
                    />
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      onClick={verifyOtp}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      Verify
                    </motion.button>
                  </div>
                )}

                {otpVerified && (
                  <>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {isLogin && (
              <>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </>
            )}
          </div>
          <div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
