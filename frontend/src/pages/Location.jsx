import React from 'react'
import SchoolMap from '../components/SchoolMap'

const Location = () => {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 m-5 md:m-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 p-6 md:p-8 shadow-lg md:shadow-xl'>
      <h1 className='text-center text-3xl text-gray-900 mb-2 font-bold'>Our Location</h1>
      <SchoolMap/>
    </div>
  )
}

export default Location