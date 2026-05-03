import React from 'react';
import { motion } from 'framer-motion';
import Notice from '../components/Notice';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      date: '2026-05-01',
      title: 'Admission Open for Academic Year 2026-2027',
      content: 'Applications are now open for admission to classes 1-12. Limited seats available.',
      fullContent: 'We are pleased to announce that admission applications for the academic year 2026-2027 are now open. We offer admission to classes 1 through 12 with limited seats available. Interested parents and students are requested to submit their applications online through our admission portal. The admission process will continue until May 15, 2026. For more information, please contact the admission office.',
      attachmentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      priority: 'high'
    },
    {
      id: 2,
      date: '2026-04-28',
      title: 'Annual Sports Day Scheduled for May 10',
      content: 'Annual sports day will be held on May 10, 2026. All students are requested to participate.',
      fullContent: 'The annual sports day is scheduled for May 10, 2026. This year\'s theme is "Unity in Diversity". All students from classes 1-12 are encouraged to participate in various sporting events including track and field, team sports, and individual competitions. The event will showcase the athletic talents of our students and promote healthy competition and sportsmanship.',
      attachmentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      priority: 'medium'
    },
    {
      id: 3,
      date: '2026-04-25',
      title: 'Parent-Teacher Meeting on May 5',
      content: 'Parent-teacher meeting scheduled for May 5, 2026. Parents are requested to attend.',
      fullContent: 'A parent-teacher meeting is scheduled for May 5, 2026, from 9:00 AM to 4:00 PM. This meeting provides an opportunity for parents to discuss their child\'s academic progress, behavior, and overall development with teachers. Parents are requested to attend the meeting and actively participate in discussions about their child\'s future.',
      priority: 'medium'
    },
    {
      id: 4,
      date: '2026-04-20',
      title: 'Mid-term Examination Schedule Released',
      content: 'Mid-term examination schedule for all classes has been released. Check the academic calendar.',
      fullContent: 'The mid-term examination schedule for all classes (1-12) has been finalized and released. Students are advised to check the academic calendar on the school website or notice board for detailed schedules. All examinations will be conducted according to the published timetable. Students should prepare well and maintain the examination discipline.',
      priority: 'medium'
    },
    {
      id: 5,
      date: '2026-04-15',
      title: 'Library Hours Extended During Exam Period',
      content: 'Library will remain open until 8 PM during the examination period for additional study hours.',
      fullContent: 'To support students during the examination period, the school library will extend its operating hours. The library will remain open from 8:00 AM to 8:00 PM Monday through Saturday. Additional study materials and reference books will be made available. Students are encouraged to utilize this facility for their exam preparation.',
      priority: 'low'
    }
  ];

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='max-w-6xl mx-auto px-4 md:px-8 py-16'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Notice notice={notice} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;