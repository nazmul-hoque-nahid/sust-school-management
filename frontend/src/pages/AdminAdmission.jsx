import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminAdmission = () => {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const token = localStorage.getItem("token");

  const API = "http://localhost:8080/api/admin/admission";

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // ✅ Fetch data
  const fetchForms = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/forms`, authHeader);
      setForms(res.data);
      setFilteredForms(res.data);
    } catch {
      alert("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  // ✅ Filtering logic
  useEffect(() => {
    let data = [...forms];

 if (selectedClass) {
  data = data.filter((f) => f.intendedClass === selectedClass);
}

    if (selectedSession) {
      data = data.filter((f) => f.session === selectedSession);
    }

    setFilteredForms(data);
  }, [selectedClass, selectedSession, forms]);

  // 🔥 Actions
  const approve = async (id) => {
    if (!id) return alert("Invalid ID");
    try {
      await axios.put(`${API}/${id}/approve`, {}, authHeader);
      fetchForms();
    } catch {
      alert("Approve failed");
    }
  };

  const reject = async (id) => {
    if (!id) return alert("Invalid ID");
    try {
      await axios.put(`${API}/${id}/reject`, {}, authHeader);
      fetchForms();
    } catch {
      alert("Reject failed");
    }
  };

  const confirm = async (id) => {
    if (!id) return alert("Invalid ID");
    if (!window.confirm("Confirm this admission?")) return;

    try {
      await axios.put(`${API}/${id}/confirm`, {}, authHeader);
      fetchForms();
    } catch {
      alert("Confirm failed");
    }
  };

  // 🧠 Unique values
  const classes = [...new Set(forms.map((f) => f.intendedClass))];
  const sessions = [...new Set(forms.map((f) => f.session))];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admission Management</h1>

      {/* 🔍 FILTERS */}
      <div className="flex gap-4 mb-6">

        {/* Class Filter */}
        <select
          value={selectedClass}
         onChange={(e) =>
  setSelectedClass(e.target.value ? Number(e.target.value) : "")
}
          className="border p-2 rounded"
        >
          <option value="">All Classes</option>
          {classes.map((c) => {
            const num = String(c).replace(/\D/g, "");
            return (
              <option key={c} value={c}>
            {num}
              </option>
            );
          })}
        </select>

        {/* Session Filter */}
        <select
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Sessions</option>
          {sessions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Reset */}
        <button
          onClick={() => {
            setSelectedClass("");
            setSelectedSession("");
          }}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Reset
        </button>

      </div>

      {/* 🔄 Loading */}
      {loading && <p>Loading...</p>}

      {/* 📭 Empty */}
      {!loading && filteredForms.length === 0 && <p>No forms found</p>}

      {/* 📊 TABLE */}
      {!loading && filteredForms.length > 0 && (
        <div className="bg-white rounded shadow max-h-[500px] overflow-y-auto">

          <table className="w-full text-sm">

            {/* 🔥 Sticky header */}
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="p-3">Name</th>
                <th>Email</th>
                <th>Class</th>
                <th>Session</th>
                <th>Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredForms.map((f) => (
                <tr key={f.formId} className="border-t text-center">

                  <td className="p-3">{f.applicantName}</td>
                  <td>{f.email}</td>

                  {/* ✅ Class as digit only */}
                  <td>
                    {String(f.intendedClass).replace(/\D/g, "")}
                  </td>

                  <td>{f.session}</td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-white text-xs
                        ${
                          f.applicationStatus === "PENDING"
                            ? "bg-yellow-500"
                            : f.applicationStatus === "APPROVED"
                            ? "bg-green-600"
                            : f.applicationStatus === "REJECTED"
                            ? "bg-red-500"
                            : "bg-blue-600"
                        }`}
                    >
                      {f.applicationStatus}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="space-x-2 p-3">

                    {f.applicationStatus === "PENDING" && (
                      <>
                        <button
                          onClick={() => approve(f.formId)}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => reject(f.formId)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {f.applicationStatus === "APPROVED" && (
                      <button
                        onClick={() => confirm(f.formId)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Confirm
                      </button>
                    )}

                    {f.applicationStatus === "REJECTED" && (
                      <span className="text-red-500 font-semibold">
                        Rejected
                      </span>
                    )}

                    {f.applicationStatus === "CONFIRMED" && (
                      <span className="text-green-700 font-semibold">
                        Confirmed
                      </span>
                    )}

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAdmission;