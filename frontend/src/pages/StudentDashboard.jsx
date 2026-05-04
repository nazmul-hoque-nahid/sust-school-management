import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  BookOpen,
  Calendar,
  Trophy,
  CreditCard,
  Bell,
  User,
  Clock,
  FileText,
  GraduationCap,
  AlertCircle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

export const StudentDashboard = () => {
  const { user, logout } = useContext(UserContext);
  const [notices] = useState([
    {
      id: 1,
      title: "Mid-term Exam Schedule Released",
      date: "2026-05-05",
      priority: "high"
    },
    {
      id: 2,
      title: "Library Books Due Soon",
      date: "2026-05-03",
      priority: "medium"
    },
    {
      id: 3,
      title: "Sports Day Registration Open",
      date: "2026-05-01",
      priority: "low"
    }
  ]);
  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Mathematics Exam",
      date: "2026-05-10",
      time: "10:00 AM",
      type: "exam"
    },
    {
      id: 2,
      title: "Physics Lab",
      date: "2026-05-08",
      time: "2:00 PM",
      type: "class"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "2026-05-15",
      time: "4:00 PM",
      type: "meeting"
    }
  ]);

  const quickLinks = [
    {
      title: "Class Routine",
      path: "/classroutine",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Exam Routine",
      path: "/examroutine",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      title: "Results",
      path: "/results",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Fees Chart",
      path: "/feeschart",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Notice Board",
      path: "/notice-board",
      icon: <Bell className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      title: "Library",
      path: "/library",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-indigo-500"
    }
  ];

  const stats = [
    {
      title: "Enrolled Courses",
      value: "6",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Current GPA",
      value: "3.8",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Attendance",
      value: "92%",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Pending Fees",
      value: "$250",
      icon: <CreditCard className="w-8 h-8" />,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "border-red-200 bg-red-50";
      case "medium": return "border-yellow-200 bg-yellow-50";
      case "low": return "border-green-200 bg-green-50";
      default: return "border-gray-200 bg-gray-50";
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case "exam": return "bg-red-100 text-red-800";
      case "class": return "bg-blue-100 text-blue-800";
      case "meeting": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Student Dashboard</h1>
              <p className="text-green-100 mt-1">
                Welcome back, {user?.name || user?.email || "Student"}!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className={`${link.color} p-3 rounded-full text-white mb-2 group-hover:scale-110 transition-transform duration-200`}>
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Notices */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Notices</h2>
              <Link
                to="/notice-board"
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className={`p-4 rounded-lg border ${getPriorityColor(notice.priority)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{notice.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{notice.date}</p>
                    </div>
                    {notice.priority === "high" && (
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
              <Link
                to="/calendar"
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                View Calendar
              </Link>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center p-4 rounded-lg border bg-gray-50">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Progress */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Current Semester Courses</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Mathematics</span>
                  <span className="text-sm text-gray-600">Grade: A</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Physics</span>
                  <span className="text-sm text-gray-600">Grade: B+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Chemistry</span>
                  <span className="text-sm text-gray-600">Grade: A-</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/results"
                  className="block w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    View Detailed Results
                  </div>
                </Link>
                <Link
                  to="/epayment"
                  className="block w-full text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Pay Fees Online
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;