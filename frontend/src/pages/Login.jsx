import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login-image.svg';
import ForgetPassword from '../components/ForgetPassword';
import ResetPassword from '../components/ResetPassword';

const Login = () => {

  // ✅ LOGIN STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ UI STATE
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // ✅ MODAL STATE
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const navigate = useNavigate();

  const closeModals = () => {
    setShowForgetPassword(false);
    setShowResetPassword(false);
  };

  // ✅ LOGIN FUNCTION
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("role", res.data.role);

      setError("");
      setMessage("Login successful");

      setTimeout(() => {
        navigate("/student");
      }, 1000);

    } catch (err) {
      setMessage("");

      if (!err.response) {
        setError("Server not reachable");
        return;
      }

      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10'>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-center text-2xl sm:text-3xl font-bold text-green-700 mb-10'
      >
        Welcome to Shahjalal University School and College
      </motion.h1>

      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10'>

        <motion.div className='hidden md:flex md:w-1/2 justify-center'>
          <img src={loginImage} alt='Login' className='w-full max-w-md object-contain' />
        </motion.div>

        <motion.div className='w-full md:w-1/2 max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10'>

          <div className='space-y-6'>

            {message && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm">
                {message}
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded-xl text-sm">
                {error}
              </div>
            )}

            <h2 className='text-2xl font-bold text-slate-900'>
              Access your account
            </h2>

            {/* ✅ FORM */}
            <form
              className='space-y-5'
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3'
                />
              </div>

              <button
                type='submit'
                className='w-full rounded-2xl bg-green-600 px-4 py-3 text-white font-semibold hover:bg-green-700'
              >
                Login
              </button>
            </form>

            {/* ✅ MODAL BUTTONS */}
            <div className='flex justify-between text-sm text-slate-600'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowForgetPassword(true);
                }}
                className='hover:underline text-red-500'
              >
                Forgot password?
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowResetPassword(true);
                }}
                className='hover:underline text-red-500'
              >
                Reset password
              </button>
            </div>

          </div>

        </motion.div>

      </div>

      {/* ✅ MODALS */}
      {showForgetPassword && <ForgetPassword onClose={closeModals} />}
      {showResetPassword && <ResetPassword onClose={closeModals} />}

    </div>
  );
};

export default Login;