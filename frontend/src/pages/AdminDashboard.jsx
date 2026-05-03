import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AdminDashboard = () => {

  const email = localStorage.getItem("email");
  const navigate = useNavigate(); // ✅ correct place

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

 const menuItems = [
  { key: "dashboard", label: "Dashboard", path: "/adminDashboard" },
  { key: "admissions", label: "Manage Admissions", path: "/adminDashboard/admission" },
  { key: "students", label: "Manage Students", path: "/adminDashboard/students" },
  { key: "enrollments", label: "Manage Enrollment", path: "/adminDashboard/enrollments" },
  { key: "teachers", label: "Manage Teachers", path: "/adminDashboard/teachers" },
  { key: "result", label: "Manage Result", path: "/adminDashboard/result" },
  { key: "settings", label: "Settings", path: "/adminDashboard/settings" },
   
];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <div className="w-64 bg-green-700 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => navigate(item.path)}
              className="p-2 rounded cursor-pointer hover:bg-green-600"
            >
              {item.label}
            </div>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>

      <div className="flex-1 p-8">
        <p className="text-gray-600 mb-6">
          Welcome, {email}
        </p>
        <Outlet />

      </div>
    </div>
  );
};

export default AdminDashboard;