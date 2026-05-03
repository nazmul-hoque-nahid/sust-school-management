import React from 'react'
import { motion } from 'framer-motion';
import SchoolBuilding from '../assets/SchoolBuilding2.jpg';

const History = () => {
  const timeline = [
    {
      title: '2005: A Vision Begins',
      description: 'Shahjalal University School and College opened its doors with a mission to deliver quality education rooted in character, creativity, and community.',
    },
    {
      title: '2010: First Graduation Ceremony',
      description: 'Our first batch of graduates celebrated academic achievement and strong values, setting the tone for an ongoing tradition of excellence.',
    },
    {
      title: '2015: Campus Expansion',
      description: 'A modern campus expansion brought new science labs, library facilities, and student activity spaces to support holistic learning.',
    },
    {
      title: '2023: Recognized for Excellence',
      description: 'Our institution received regional recognition for academic performance, extracurricular success, and student wellbeing initiatives.',
    },
  ];

  const highlights = [
    {
      label: 'Years of Service',
      value: '19+',
      detail: 'Nearly two decades of trusted education',
    },
    {
      label: 'Student Community',
      value: '2000+',
      detail: 'A vibrant and diverse learning family',
    },
    {
      label: 'Academic Awards',
      value: '15+',
      detail: 'Honors in science, arts, and sports',
    },
  ];

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className='relative mb-16 overflow-hidden rounded-b-3xl shadow-2xl'
      >
        <img
          src={SchoolBuilding}
          alt='School building exterior'
          className='w-full h-[320px] md:h-[520px] object-cover'
        />

        <div className='absolute inset-0 bg-slate-950/60' />

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='text-sm uppercase tracking-[0.35em] text-emerald-200/90 mb-3'
          >
            Our story in milestones
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight'
          >
            History of Shahjalal University School & College
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-200/90'
          >
            From humble beginnings to regional recognition, our history is built on faith, academic achievement, and lifelong student success.
          </motion.p>
        </div>
      </motion.section>

      <main className='max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8'>
        <section className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <p className='text-green-600 font-semibold uppercase tracking-[0.24em]'>About our legacy</p>
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-900'>A journey shaped by purpose and progress</h2>
            <p className='text-base leading-8 text-slate-700 sm:text-lg'>
              Since 2005, Shahjalal University School and College has grown from a small academic initiative into a thriving institution. Our focus on strong values, modern facilities, and student-centered learning has guided every chapter of our story.
            </p>
            <p className='text-base leading-8 text-slate-700 sm:text-lg'>
              We nurture intellectual curiosity while maintaining deep respect for tradition and community. Each milestone reflects our commitment to create a welcoming environment where students feel empowered to learn, lead, and contribute.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            {highlights.map((item) => (
              <div key={item.label} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                <p className='text-sm uppercase tracking-[0.22em] text-slate-500'>{item.label}</p>
                <p className='mt-4 text-4xl font-extrabold text-slate-900'>{item.value}</p>
                <p className='mt-2 text-sm text-slate-600'>{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section className='mb-16'>
          <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='text-sm uppercase tracking-[0.24em] text-emerald-600'>Timeline</p>
              <h2 className='mt-3 text-3xl font-bold text-slate-900'>Key moments in our growth</h2>
            </div>
            <p className='max-w-xl text-sm leading-7 text-slate-600'>Every year, our school has moved forward with a clear vision: better facilities, stronger academics, and a supportive culture for every learner.</p>
          </div>

          <div className='relative mt-12 overflow-hidden rounded-3xl bg-white p-6 shadow-xl sm:p-8'>
            <div className='hidden md:block absolute left-10 top-8 bottom-8 w-1 rounded-full bg-emerald-200' />
            <div className='space-y-8'>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='relative flex flex-col gap-3 md:flex-row md:items-start'
                >
                  <div className='flex items-center gap-4 md:w-40'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg'>
                      {index + 1}
                    </div>
                    <div className='text-sm font-semibold text-slate-900'>{item.title.split(':')[0]}</div>
                  </div>
                  <div className='md:pl-16'>
                    <p className='text-lg font-semibold text-slate-900'>{item.title}</p>
                    <p className='mt-2 text-slate-600 leading-7'>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-3 mb-16'>
          <div className='rounded-[2rem] bg-emerald-700 p-8 text-white shadow-2xl'>
            <p className='uppercase tracking-[0.3em] text-sm text-emerald-200'>Culture</p>
            <h3 className='mt-5 text-2xl font-bold'>Rooted in values</h3>
            <p className='mt-4 text-sm leading-7 text-slate-100'>Respect, responsibility, and compassion remain the center of our academic and social life.</p>
          </div>
          <div className='rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200'>
            <p className='uppercase tracking-[0.3em] text-sm text-slate-500'>Campus</p>
            <h3 className='mt-5 text-2xl font-bold text-slate-900'>Learning Spaces</h3>
            <p className='mt-4 text-sm leading-7 text-slate-600'>Modern classrooms, labs, and creative spaces help students explore science, arts, and technology.</p>
          </div>
          <div className='rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200'>
            <p className='uppercase tracking-[0.3em] text-sm text-slate-500'>Community</p>
            <h3 className='mt-5 text-2xl font-bold text-slate-900'>Together We Grow</h3>
            <p className='mt-4 text-sm leading-7 text-slate-600'>Strong partnerships with parents, teachers, and alumni drive our continuous improvement.</p>
          </div>
        </section>

        <section className='rounded-[2rem] bg-gradient-to-r from-slate-900 to-emerald-700 p-10 text-white shadow-2xl'>
          <div className='grid gap-6 lg:grid-cols-2 lg:items-center'>
            <div>
              <p className='uppercase tracking-[0.3em] text-sm text-emerald-200'>Legacy</p>
              <h2 className='mt-3 text-3xl font-bold'>Building futures for every generation</h2>
              <p className='mt-5 text-base leading-8 text-slate-200/90'>Our history is not just a record of dates and events; it is the story of students who grew in confidence, teachers who inspired curiosity, and families who trusted us with their dreams.</p>
            </div>
            <div className='rounded-3xl bg-white/10 p-8'>
              <p className='text-sm uppercase tracking-[0.3em] text-emerald-200'>Headmaster's note</p>
              <p className='mt-5 text-sm leading-7 text-slate-100'>“We continue to honor our founding aspirations by offering a balanced education where academic excellence meets moral strength. Every new day adds a meaningful chapter to our shared history.”</p>
              <p className='mt-6 text-sm font-semibold text-slate-100'>— Principal, Shahjalal University School & College</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default History