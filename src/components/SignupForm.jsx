// import { useState } from "react";
// import { signUp } from "../utils/auth";
// import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     const result = await signUp(email, password);
//     if (result.success) {
//       setSuccess("Sign up successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 1500); // Redirect to login after 1.5 seconds
//     } else {
//       setError(result.error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">
//           Create Account
//         </h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {success && <p className="text-green-500 text-center">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           {/* Email Field */}
//           <div className="mb-6 relative">
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
//               <FaEnvelope className="text-gray-500 mr-2" />
//               <input
//                 className="w-full outline-none text-gray-800"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-6 relative">
//             <label className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
//               <FaLock className="text-gray-500 mr-2" />
//               <input
//                 className="w-full outline-none text-gray-800"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6 flex justify-center">
//             <button
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//               type="submit"
//             >
//               Sign Up
//             </button>
//           </div>

//           <p className="text-center text-gray-600 mt-4">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//               Login here
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
import { useState } from "react";
import { signUp } from "../utils/auth"; // Assuming this function handles sign-up logic.
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaAddressCard } from "react-icons/fa";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // New state for name
  const [phone, setPhone] = useState(""); // New state for phone
  const [address, setAddress] = useState(""); // New state for address
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = await signUp(email, password, name, phone, address); // Pass the additional data
    if (result.success) {
      setSuccess("Sign up successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500); // Redirect to login after 1.5 seconds
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">Create Account</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
              <FaUser className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none text-gray-800"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none text-gray-800"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none text-gray-800"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Address Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
              <FaAddressCard className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none text-gray-800"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition duration-300 focus-within:border-blue-500">
              <FaLock className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none text-gray-800"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
