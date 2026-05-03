import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminStudents = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sessionFilter, setSessionFilter] = useState("");

  const [selected, setSelected] = useState(null);

  const token = localStorage.getItem("token");

  const API = "http://localhost:8080/api/admin/student";

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // ✅ FETCH ALL
  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API}/students`, authHeader);
      setStudents(res.data);
      setFiltered(res.data);
    } catch {
      alert("Failed to load students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ BACKEND FILTER (better than frontend)
  const applyFilter = async () => {
    try {
      const res = await axios.get(`${API}/filter`, {
        ...authHeader,
        params: {
          cls: classFilter || null,
          session: sessionFilter || null,
        },
      });
      setStudents(res.data);
      setFiltered(res.data);
    } catch {
      alert("Filter failed");
    }
  };

  // ✅ SEARCH (frontend)
  useEffect(() => {
    let data = students;

    if (search) {
      data = data.filter(
        (s) =>
          s.fullName.toLowerCase().includes(search.toLowerCase()) ||
          s.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [search, students]);

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(`${API}/students/${id}`, authHeader);
      fetchStudents();
    } catch {
      alert("Delete failed");
    }
  };

  const updateStudent = async () => {
    try {
      await axios.put(
        `${API}/students/${selected.studentId}`,
        selected,
        authHeader
      );
      setSelected(null);
      fetchStudents();
    } catch {
      alert("Update failed");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Student Management</h1>

      {/* 🔍 FILTERS */}
      <div className="flex flex-wrap gap-3 mb-6">

        <input
          type="text"
          placeholder="Search name/email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-60"
        />

        <input
          type="number"
          placeholder="Class (1-12)"
          min="1"
          max="12"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="border p-2 rounded w-32"
        />

        <input
          type="text"
          placeholder="Session (2025-26)"
          value={sessionFilter}
          onChange={(e) => setSessionFilter(e.target.value)}
          className="border p-2 rounded w-40"
        />

        <button
          onClick={applyFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Filter
        </button>

        <button
          onClick={() => {
            setSearch("");
            setClassFilter("");
            setSessionFilter("");
            fetchStudents();
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
      <div className="overflow-auto max-h-[500px] border rounded">

        <table className="w-full text-sm bg-white">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Session</th>
              <th>Roll</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.studentId} className="border-t text-center">

                <td className="p-3">{s.fullName}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.currentClass}</td>
                <td>{s.session}</td>
                <td>{s.rollNo}</td>

                <td className="space-x-2">

                  <button
                    onClick={() => setSelected(s)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteStudent(s.studentId)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* ✏️ EDIT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white p-6 rounded w-96 space-y-3">

            <h2 className="text-xl font-bold">Edit Student</h2>

            <input
              value={selected.fullName}
              onChange={(e) =>
                setSelected({ ...selected, fullName: e.target.value })
              }
              className="border p-2 w-full"
              placeholder="Name"
            />

            <input
              value={selected.phone}
              onChange={(e) =>
                setSelected({ ...selected, phone: e.target.value })
              }
              className="border p-2 w-full"
              placeholder="Phone"
            />

            <input
              type="number"
              value={selected.currentClass || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  currentClass: Number(e.target.value),
                })
              }
              className="border p-2 w-full"
              placeholder="Class"
            />

            <input
              value={selected.session || ""}
              onChange={(e) =>
                setSelected({ ...selected, session: e.target.value })
              }
              className="border p-2 w-full"
              placeholder="Session"
            />

            <input
              type="number"
              value={selected.rollNo || ""}
              onChange={(e) =>
                setSelected({
                  ...selected,
                  rollNo: Number(e.target.value),
                })
              }
              className="border p-2 w-full"
              placeholder="Roll"
            />

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => setSelected(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>

              <button
                onClick={updateStudent}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Save
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminStudents;