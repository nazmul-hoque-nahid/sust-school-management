import React, { useState } from "react";
import axios from "axios";

const OnlineAdmission = () => {

  const initialState = {
    applicantName: "",
    dob: "",
    gender: "",
    intendedClass: "",
    session: "2021-22", // fixed
    birthCertificateNo: "",
    previousSchool: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    phone: "",
    email: "",
    currentAddress: "",
    permanentAddress: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // submit using axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    try {
      await axios.post(
        "http://localhost:8080/api/admission/apply",
        {
          ...formData,
          intendedClass: Number(formData.intendedClass)
        }
      );

      alert("Admission Submitted Successfully");
      setFormData(initialState);

    } catch (err) {
      if (err.response) {
        const data = err.response.data;

        if (typeof data === "object") {
          setErrors(data); // field errors
        } else {
          setErrors({ general: data });
        }
      } else {
        setErrors({ general: "Network error. Try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  // reset
  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 space-y-6"
      >

        <h1 className="text-3xl font-bold text-center text-gray-700">
          Admission Form
        </h1>

        {/* General Error */}
        {errors.general && (
          <div className="bg-red-100 text-red-700 p-2 rounded">
            {errors.general}
          </div>
        )}

        {/* Student Info */}
        <Section title="Student Information">
          <Field error={errors.applicantName}>
            <Input name="applicantName" value={formData.applicantName} placeholder="Full Name" onChange={handleChange} />
          </Field>

          <Field error={errors.gender}>
            <Select name="gender" value={formData.gender} options={["MALE", "FEMALE"]} placeholder="Gender" onChange={handleChange} />
          </Field>

          <Field error={errors.dob}>
            <DateInput name="dob" value={formData.dob} onChange={handleChange} />
          </Field>

          <Field error={errors.intendedClass}>
            <Input name="intendedClass" type="number" value={formData.intendedClass} placeholder="Class" onChange={handleChange} />
          </Field>

          {/* ✅ FIXED SESSION */}
          <Field error={errors.session}>
            <Select
              name="session"
              value={formData.session}
              onChange={handleChange}
              options={["2021-22"]}
              placeholder="Session"
            />
          </Field>

          <Input name="birthCertificateNo" value={formData.birthCertificateNo} placeholder="Birth Certificate No" onChange={handleChange} />

          <Input name="previousSchool" value={formData.previousSchool} placeholder="Previous School" onChange={handleChange} />
        </Section>

        {/* Parent */}
        <Section title="Parent Information">
          <Input name="fatherName" value={formData.fatherName} placeholder="Father Name" onChange={handleChange} />
          <Input name="motherName" value={formData.motherName} placeholder="Mother Name" onChange={handleChange} />
        </Section>

        {/* Guardian */}
        <Section title="Guardian">
          <Input name="guardianName" value={formData.guardianName} placeholder="Guardian Name" onChange={handleChange} />
        </Section>

        {/* Address */}
        <Section title="Address">
          <Textarea name="currentAddress" value={formData.currentAddress} placeholder="Current Address" onChange={handleChange} />
          <Textarea name="permanentAddress" value={formData.permanentAddress} placeholder="Permanent Address" onChange={handleChange} />
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <Field error={errors.phone}>
            <Input name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} />
          </Field>

          <Field error={errors.email}>
            <Input name="email" type="email" value={formData.email} placeholder="Email" onChange={handleChange} />
          </Field>
        </Section>

        {/* Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Clear
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default OnlineAdmission;


/* ---------- Components ---------- */

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Field = ({ error, children }) => (
  <div>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const Input = ({ type = "text", name, value, onChange, ...props }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
    {...props}
    required
  />
);

const Textarea = ({ name, value, onChange, ...props }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    rows="3"
    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
    {...props}
  />
);

const Select = ({ options, name, value, onChange, placeholder }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
    required
  >
    <option value="" disabled>
      {placeholder}
    </option>

    {options.map((opt) => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);

const DateInput = ({ name, value, onChange }) => (
  <input
    type="date"
    name={name}
    value={value}
    onChange={onChange}
    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
    required
  />
);