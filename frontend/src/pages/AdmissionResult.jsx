import React, { useState } from "react";
import axios from "axios";

const AdmissionResult = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const checkStatus = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/admission/status/${email}`
      );
      setResult(res.data);
      setError("");
    } catch (err) {
      setError("Application not found");
      setResult(null);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        Check Admission Status
      </h1>

      {/* INPUT */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      <button
        onClick={checkStatus}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Check Status
      </button>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-6 p-4 bg-white shadow rounded">

          <h2 className="text-xl font-semibold">
            {result.applicantName}
          </h2>

          <p className="">
          </p>

          {/* STATUS MESSAGE */}
          {result.status === "APPROVED" && (
            <p className="text-green-600 mt-3 font-semibold">
              Congratulations ! You have been selected for admission. Please contact Admission office.
            </p>
          )}

          {result.status === "PENDING" && (
            <p className="text-yellow-600 mt-3">
              ⏳ Your application is under review. Please wait.
            </p>
          )}

          {result.status === "REJECTED" && (
            <p className="text-red-600 mt-3">
               Sorry, you were not selected for admission.
            </p>
          )}

        </div>
      )}
    </div>
  );
};

export default AdmissionResult;