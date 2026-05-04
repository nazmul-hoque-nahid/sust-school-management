import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Epayment = () => {
  const navigate = useNavigate()
  const fees = [
    { id: 1, name: 'Examination Fee' },
    { id: 2, name: 'Monthly School Fee' },
    { id: 3, name: 'Transcript Fee' },
  ]

  const handlePayNow = (fee) => {
    if (fee.name === 'Examination Fee') {
      navigate('/examination-fee')
    } else if (fee.name === 'Monthly School Fee') {
      navigate('/monthly-school-fee')
    } else if (fee.name === 'Transcript Fee') {
      navigate('/transcript-fee')
    }
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-emerald-50 via-slate-100 to-slate-200'>
      <div className='max-w-6xl mx-auto px-4 md:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-10 rounded-[2.5rem] bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-sm text-center'
        >
         
            <h1 className='text-3xl sm:text-4xl font-bold text-slate-900'>E-Payment Portal</h1>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className='rounded-4xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-300/20'
        >
          <div className='overflow-x-auto'>

            <table className='w-full table-auto border-collapse text-left'>
              <thead>
                <tr className='border-b-2 border-slate-500'>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-slate-900'>S.No</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-slate-900'>Fee Name</th>
                  <th className='px-4 py-3 text-center text-sm font-semibold text-slate-900'>Action</th>
                </tr>
              </thead>

              <tbody>
                {fees.map((fee, index) => (
                  <motion.tr
                    key={fee.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className='border-b-2 border-slate-200 hover:bg-slate-50 transition-colors'
                  >
                    <td className='px-4 py-4 text-sm text-slate-700'>{fee.id}</td>
                    <td className='px-4 py-4 text-sm text-slate-700'>{fee.name}</td>
                    <td className='px-4 py-4 text-center'>
                      <button
                        onClick={() => handlePayNow(fee)}
                      
                        className='inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700'
                      >
                        Pay Now
                      </button>
                    </td>
                  </motion.tr>
                ))}


              </tbody>


            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Epayment