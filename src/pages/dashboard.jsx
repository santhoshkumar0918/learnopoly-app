import React from "react";

// Mock data for student profile
const studentProfile = {
  name: "John Doe",
  studentId: "123456",
  registerNo: "R-789012",
  email: "john.doe@example.com",
  institution: "Bharathi Institution",
  program:
    "B.Tech.-Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning",
  status: "Active",
};

function Dashboard() {
  return (
    <main className="bg-gray-100 p-6 min-h-screen w-full">
      <div className="grid grid-cols-1 gap-6">
        {/* Student Profile Header */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Student Profile
          </h2>
          <table className="table-auto w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Attribute</th>
                <th className="py-2 px-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">{studentProfile.name}</td>
                <td className="py-2 px-4 border-b">
                  {studentProfile.studentId}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Register No.</td>
                <td className="py-2 px-4 border-b">
                  {studentProfile.registerNo}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Email ID</td>
                <td className="py-2 px-4 border-b">{studentProfile.email}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Institution</td>
                <td className="py-2 px-4 border-b">
                  {studentProfile.institution}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Program</td>
                <td className="py-2 px-4 border-b">{studentProfile.program}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Current Status</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`font-bold text-${
                      studentProfile.status === "Active" ? "green" : "red"
                    }-500`}
                  >
                    {studentProfile.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Content Box: Additional Information with DP on the right */}
        <div className="bg-white p-6 border rounded-lg shadow-lg flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
              Additional Information
            </h3>
            <div className="flex flex-col">
              <div className="mb-4">
                <h1 className="text-black">
                  Student Name: {studentProfile.name}
                </h1>
              </div>
              <div className="mb-4">
                <h1 className="text-black">
                  Student ID: {studentProfile.studentId}
                </h1>
              </div>
              <div className="mb-4">
                <h1 className="text-black">Email ID: {studentProfile.email}</h1>
              </div>
              <div className="mb-4">
                <h1 className="text-black">
                  Institution: {studentProfile.institution}
                </h1>
              </div>
            </div>
          </div>

          {/* Profile Picture & Status on the right */}
          <div className="text-center flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-4"></div>
            <p className="text-black">
              Current status:{" "}
              <span className="font-bold">{studentProfile.status}</span>
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                Edit Profile
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 ml-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
