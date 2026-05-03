import React from "react";

export const StudentDashboard = () => {
  const email = localStorage.getItem("email");
  const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold mb-4">
        Student Dashboard
      </h1>

      <p className="text-xl font-bold text-gray-700 mb-6">
        Welcome, {email}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">My Profile</h2>
          <p className="text-sm text-gray-500">View your info</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">My Courses</h2>
          <p className="text-sm text-gray-500">See enrolled courses</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-xl">Results</h2>
          <p className="text-sm text-gray-500">Check your grades</p>
        </div>
        <div>
            <button
  onClick={handleLogout}
  className="bg-red-500 text-white px-4 py-2 rounded"
>
  Log out
</button>
        </div>
      </div>

    </div>
    
  );
};

export default StudentDashboard;