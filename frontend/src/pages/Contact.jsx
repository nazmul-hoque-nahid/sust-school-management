import React from 'react'
import SchoolMap from '../components/SchoolMap'
import Logo from '../assets/Logo.jpg'

const Contact = () => {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <section className='relative overflow-hidden bg-gradient-to-r from-emerald-700 via-slate-900 to-slate-800 px-4 py-16 text-white sm:px-6 md:px-10 lg:px-16 lg:py-20'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_35%)]' />
        <div className='relative mx-auto max-w-7xl'>
          <div className='grid gap-8 md:gap-10 md:grid-cols-1 lg:grid-cols-[1.1fr_auto] items-start lg:items-center'>

            <div className='max-w-3xl'>
              <p className='text-xs uppercase tracking-[0.35em] text-emerald-200/90 sm:text-sm'>Get in touch</p>
              <h1 className='mt-3 text-2xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>Contact Shahjalal University School & College</h1>
              <p className='mt-4 text-sm leading-7 text-emerald-100 sm:text-base md:text-lg md:leading-8'>We're here to help with admission questions, campus visits, academic enquiries, and general school information. Reach out to us and we will respond as soon as possible.</p>
            </div>

            <div className='rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl w-full md:w-auto md:min-w-[320px]'>
              <img src={Logo} alt='School logo' className='h-16 md:h-20 w-16 md:w-20 rounded-full object-cover shadow-lg' />
              <div className='mt-4 md:mt-6 space-y-3 md:space-y-4'>
                <div>
                  <p className='text-xs uppercase tracking-[0.25em] text-emerald-200'>Address</p>
                  <p className='mt-2 text-sm md:text-base text-white'>SUST Campus, SUST-3114, Sylhet, Bangladesh</p>
                </div>

                <div>
                  <p className='text-xs uppercase tracking-[0.25em] text-emerald-200'>Phone</p>
                  <p className='mt-2 text-sm md:text-base text-white'><a href='tel:+880123456789' className='hover:text-emerald-300 transition'>+880 1234 56789</a></p>
                </div>

                <div>
                  <p className='text-xs uppercase tracking-[0.25em] text-emerald-200'>Email</p>
                  <p className='mt-2 text-sm md:text-base text-white break-all'><a href='mailto:info@school.edu' className='hover:text-emerald-300 transition'>info@school.edu</a></p>
                </div>
                
                <div>
                  <p className='text-xs uppercase tracking-[0.25em] text-emerald-200'>Website</p>
                  <p className='mt-2 text-sm md:text-base text-white break-all'><a href='https://www.susc.edu' target='_blank' rel='noopener noreferrer' className='hover:text-emerald-300 transition'>www.susc.edu</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-16'>
        <div className='grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='space-y-6 md:space-y-8'>
            <div className='rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-lg md:shadow-xl'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Where to find us</h2>
              <p className='mt-3 md:mt-4 text-sm md:text-base text-slate-600 leading-6 md:leading-7'>Our campus is located inside SUST, making it easy for parents, students and visitors to meet our admissions team, tour classrooms, and learn more about our programs.</p>
              
              <div className='grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-8'>
                <div className='rounded-[1.25rem] md:rounded-3xl bg-slate-50 p-4 md:p-6'>
                  <p className='text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500'>Office Hours</p>
                  <p className='mt-2 md:mt-3 text-base md:text-lg font-semibold text-slate-900'>Sun - Thu</p>
                  <p className='text-sm md:text-base text-slate-600'>9:00 AM - 4:30 PM</p>
                </div>
                <div className='rounded-[1.25rem] md:rounded-3xl bg-slate-50 p-4 md:p-6'>
                  <p className='text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500'>Admissions</p>
                  <p className='mt-2 md:mt-3 text-base md:text-lg font-semibold text-slate-900'>Open year-round</p>
                  <p className='text-sm md:text-base text-slate-600'>Visit for enrollment details and application support.</p>
                </div>
                <div className='rounded-[1.25rem] md:rounded-3xl bg-slate-50 p-4 md:p-6'>
                  <p className='text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500'>Support</p>
                  <p className='mt-2 md:mt-3 text-base md:text-lg font-semibold text-slate-900'>Ready to assist</p>
                  <p className='text-sm md:text-base text-slate-600'>Our team answers queries in one business day.</p>
                </div>
              </div>

            </div>

            <SchoolMap />
          </div>

          <aside className='rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-lg md:shadow-xl'>
            <div className='border-b border-slate-200 pb-4 md:pb-6'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Send Enquiry</h2>
            </div>

            <form className='mt-6 md:mt-8 space-y-3 md:space-y-6'>
              <div>
                <label htmlFor='name' className='block text-xs md:text-sm font-medium text-slate-700'>Full Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='mt-1 md:mt-2 block w-full rounded-2xl md:rounded-3xl border border-slate-300 bg-slate-50 px-3 md:px-4 py-1.5 md:py-3 text-xs md:text-sm md:text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-xs md:text-sm font-medium text-slate-700'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='mt-1 md:mt-2 block w-full rounded-2xl md:rounded-3xl border border-slate-300 bg-slate-50 px-3 md:px-4 py-1.5 md:py-3 text-xs md:text-sm md:text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200'
                />
              </div>
              <div>
                <label htmlFor='subject' className='block text-xs md:text-sm font-medium text-slate-700'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='mt-1 md:mt-2 block w-full rounded-2xl md:rounded-3xl border border-slate-300 bg-slate-50 px-3 md:px-4 py-1.5 md:py-3 text-xs md:text-sm md:text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-xs md:text-sm font-medium text-slate-700'>Your Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  required
                  className='mt-1 md:mt-2 block w-full rounded-2xl md:rounded-3xl border border-slate-300 bg-slate-50 px-3 md:px-4 py-1.5 md:py-3 text-xs md:text-sm md:text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200'
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-2xl md:rounded-3xl bg-emerald-600 px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-white'
              >
                Submit Enquiry
              </button>
            </form>
          </aside>

        </div>
      </main>
    </div>
  )
}

export default Contact