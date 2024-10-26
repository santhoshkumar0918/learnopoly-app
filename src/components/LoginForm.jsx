import React, { useState, useEffect } from "react";
import { logIn } from "../utils/auth";
import { FaArrowRight } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaString = "";
    for (let i = 0; i < 6; i++) {
      captchaString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (userInput !== captcha) {
      alert("Incorrect CAPTCHA");
      generateCaptcha();
      return;
    }

    const result = await logIn(email, password);
    if (result.success) {
      setSuccess("Login successful!");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      {" "}
      <div className="relative flex flex-col md:flex-row w-full md:w-4/5 bg-white rounded-lg shadow-lg gap-6 p-4">
        {/* Left Content Section */}
        <div
          className="flex flex-col w-full mt-2 md:w-[400px] ml-20 mb-2 text-white rounded-xl p-6 md:p-10 md:mr-4"
          style={{
            backgroundImage: `url('/images/login-page.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Empowering Minds, Shaping Futures
          </h2>
          <p className="mb-8">
            Unlock your potential with expert coaching, comprehensive courses,
            and personalized learning.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/5 bg-white p-4 ml-10 md:p-6 mb-4 mt-8 rounded-lg">
          <div
            className="flex justify-center items-center h-16 mb-8"
            style={{
              backgroundImage: `url('/images/Rectangle.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "4rem",
            }}
          ></div>

          <h3 className="text-xl text-black flex justify-center font-bold mb-2">
            Login
          </h3>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 text-black text-[15px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border text-gray-800 border-gray-400 rounded-md px-3 py-2"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-black mb-2 text-[15px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border text-gray-700 border-gray-400 rounded-md px-3 py-2"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* CAPTCHA Section */}
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-black" htmlFor="captcha">
                  Captcha
                </label>
                <input
                  className="w-full border text-gray-800 border-gray-400 rounded-md px-3 py-2"
                  id="captcha"
                  type="text"
                  value={captcha}
                  readOnly
                />
              </div>
              <div className="w-1/2">
                <label className="block text-black" htmlFor="reenter-captcha">
                  Enter Captcha
                </label>
                <input
                  className="w-full border text-gray-700 border-gray-400 rounded-md px-3 py-2"
                  id="reenter-captcha"
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Sign In Button */}
            <div className="flex justify-center w-full">
              <button
                className="w-full md:w-[170px] md:h-[50px] bg-blue-900 text-white rounded-md px-3 py-2 mt-6 hover:bg-blue-700 transition flex items-center justify-center text-xl relative overflow-hidden"
                type="submit"
              >
                Sign in &nbsp;
                <div className="relative flex items-center justify-center">
                  <svg
                    className="absolute w-12 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M6 6 A9 9 0 1 1 7 20"
                      className="stroke-current font-thin text-white"
                      fill="none"
                    />
                  </svg>
                  <FaArrowRight className="text-white h-4 relative right-1 z-10" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
