import React from 'react'
import { motion } from 'framer-motion'

const WhyStudyAt = () => {
  const reasons = [
    {
      title: 'Academic Excellence',
      description: 'A rigorous curriculum, experienced teachers, and strong exam results make us one of the most trusted schools in the region.',
    },
    {
      title: 'Holistic Development',
      description: 'Students grow through sports, arts, clubs, and leadership programs that build confidence beyond the classroom.',
    },
    {
      title: 'Safe & Supportive Campus',
      description: 'A well-supervised environment with caring teachers ensures every student feels secure and respected.',
    },
    {
      title: 'Modern Facilities',
      description: 'Advanced labs, a library, and technology-enabled classrooms support both academic and creative learning.',
    },
    {
      title: 'Student-Centered Learning',
      description: 'Individual attention, mentoring, and small class sizes help each learner discover their strengths.',
    },
    {
      title: 'Community & Values',
      description: 'Our school emphasizes character, respect, and service so students grow into responsible citizens.',
    },
  ]

  const stats = [
    { label: 'Years of impact', value: '19+' },
    { label: 'Active students', value: '2000+' },
    { label: 'Award-winning teams', value: '15+' },
  ]

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative overflow-hidden bg-gradient-to-br from-emerald-700 via-slate-900 to-slate-700 px-6 py-20 text-white sm:px-10 lg:px-16'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_40%)]' />
        <div className='relative mx-auto max-w-6xl'>
          <p className='text-sm uppercase tracking-[0.3em] text-emerald-200/90'>Why study at us</p>
          <h1 className='mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>A school where every student is inspired to learn, lead, and succeed.</h1>
          <p className='mt-6 max-w-3xl text-base leading-8 text-emerald-100 sm:text-lg'>Join a community that blends academic strength, character building, and modern facilities with caring mentorship and a safe, inclusive atmosphere.</p>

          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            {stats.map((stat) => (
              <div key={stat.label} className='rounded-3xl bg-slate-900/20 p-6 backdrop-blur-sm border border-white/10'>
                <p className='text-4xl font-extrabold'>{stat.value}</p>
                <p className='mt-3 text-sm uppercase tracking-[0.24em] text-emerald-200'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <main className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <section className='grid gap-10 lg:grid-cols-[0.9fr_0.7fr] items-start'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <p className='text-sm uppercase tracking-[0.25em] text-emerald-600'>Our promise</p>
            <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Designed for student success at every step.</h2>
            <p className='text-base leading-8 text-slate-700 sm:text-lg'>From the classroom to extracurricular activities, our whole-school approach ensures students receive the guidance, resources, and environment they need to thrive.</p>
            <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg'>
              <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>Admissions highlight</p>
              <h3 className='mt-4 text-2xl font-semibold text-slate-900'>A supportive start for new students</h3>
              <p className='mt-3 text-slate-600'>New learners receive orientation, mentoring, and academic support so they feel confident from day one.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div className='rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl'>
              <p className='text-sm uppercase tracking-[0.25em] text-emerald-200'>Student Voice</p>
              <h3 className='mt-4 text-2xl font-semibold'>A culture of encouragement</h3>
              <p className='mt-4 text-slate-200 leading-7'>We cultivate confidence through positive reinforcement, peer collaboration, and activities that celebrate each child’s growth.</p>
            </div>
            <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg'>
              <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>Campus Life</p>
              <h3 className='mt-4 text-2xl font-semibold text-slate-900'>A well-balanced school day</h3>
              <p className='mt-4 text-slate-600 leading-7'>Academic lessons are balanced with physical education, arts, and collaborative projects to support healthy minds and bodies.</p>
            </div>
          </motion.div>
        </section>

        <section className='mt-16'>
          <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='text-sm uppercase tracking-[0.24em] text-emerald-600'>Reasons to choose us</p>
              <h2 className='mt-3 text-3xl font-bold text-slate-900'>Six strengths that make our school stand out</h2>
            </div>
            <p className='max-w-xl text-sm leading-7 text-slate-600'>Every aspect of our school is built on the belief that students deserve academic challenge, personal support, and meaningful opportunities.</p>
          </div>

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg'
              >
                <div className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-semibold shadow-sm'>
                  {index + 1}
                </div>
                <h3 className='mt-6 text-xl font-semibold text-slate-900'>{reason.title}</h3>
                <p className='mt-3 text-slate-600 leading-7'>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className='mt-16 rounded-[2rem] bg-gradient-to-r from-slate-900 to-emerald-700 p-10 text-white shadow-2xl'>
          <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-emerald-200'>Student outcomes</p>
              <h2 className='mt-4 text-3xl font-bold'>Preparing learners for school, life, and leadership.</h2>
              <p className='mt-5 max-w-2xl text-base leading-8 text-slate-200/90'>Our graduates leave with strong academic skills, confidence to take on challenges, and values that help them succeed in higher education and beyond.</p>
            </div>
            <div className='rounded-[2rem] bg-white/10 p-8'>
              <p className='uppercase tracking-[0.3em] text-sm text-emerald-200'>Principal’s message</p>
              <p className='mt-5 text-sm leading-7 text-slate-100'>“We believe every child belongs to a school where they are seen, supported, and inspired. At Shahjalal University School and College, we are committed to helping each student grow into a thoughtful, capable, and courageous learner.”</p>
              <p className='mt-6 font-semibold text-slate-100'>— Principal, Shahjalal University School & College</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WhyStudyAt