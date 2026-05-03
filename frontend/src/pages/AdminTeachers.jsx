import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [newTeacher, setNewTeacher] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
  });

  const token = localStorage.getItem("token");

  const API = "http://localhost:8080/api/admin/teacher";

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // 🔥 Fetch
  const fetchData = async () => {
    const res = await axios.get(`${API}/all`, authHeader);
    setTeachers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ➕ Create
  const createTeacher = async () => {
    await axios.post(API, newTeacher, authHeader);
    setNewTeacher({
      fullName: "",
      email: "",
      phone: "",
      qualification: "",
    });
    fetchData();
  };

  // ✏️ Update
  const updateTeacher = async () => {
    await axios.put(
      `${API}/${selected.teacherId}`,
      selected,
      authHeader
    );
    setSelected(null);
    fetchData();
  };

  // ❌ Delete
  const deleteTeacher = async (id) => {
    if (!window.confirm("Delete teacher?")) return;
    await axios.delete(`${API}/${id}`, authHeader);
    fetchData();
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Teacher Management</h1>

      {/* ➕ CREATE */}
      <div className="mb-6 space-y-2">
        <input placeholder="Name" value={newTeacher.fullName}
          onChange={(e)=>setNewTeacher({...newTeacher, fullName:e.target.value})}
          className="border p-2 mr-2" />

        <input placeholder="Email" value={newTeacher.email}
          onChange={(e)=>setNewTeacher({...newTeacher, email:e.target.value})}
          className="border p-2 mr-2" />

        <input placeholder="Phone" value={newTeacher.phone}
          onChange={(e)=>setNewTeacher({...newTeacher, phone:e.target.value})}
          className="border p-2 mr-2" />

        <input placeholder="Qualification" value={newTeacher.qualification}
          onChange={(e)=>setNewTeacher({...newTeacher, qualification:e.target.value})}
          className="border p-2 mr-2" />

        <button onClick={createTeacher}
          className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* 📊 TABLE */}
      <table className="w-full bg-white shadow text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t) => (
            <tr key={t.teacherId} className="border-t text-center">
              <td>{t.fullName}</td>
              <td>{t.email}</td>
              <td>{t.phone}</td>
              <td>{t.qualification}</td>

              <td>
                <button
                  onClick={() => setSelected(t)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTeacher(t.teacherId)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✏️ EDIT */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl font-bold mb-4">Edit Teacher</h2>

            <input value={selected.fullName}
              onChange={(e)=>setSelected({...selected, fullName:e.target.value})}
              className="border p-2 w-full mb-2" />

            <input value={selected.phone}
              onChange={(e)=>setSelected({...selected, phone:e.target.value})}
              className="border p-2 w-full mb-2" />

            <input value={selected.qualification}
              onChange={(e)=>setSelected({...selected, qualification:e.target.value})}
              className="border p-2 w-full mb-2" />

            <div className="flex justify-end gap-2">
              <button onClick={()=>setSelected(null)}
                className="bg-gray-400 px-3 py-1 text-white rounded">
                Cancel
              </button>

              <button onClick={updateTeacher}
                className="bg-green-600 px-3 py-1 text-white rounded">
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminTeachers;