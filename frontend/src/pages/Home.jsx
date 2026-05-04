import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, GraduationCap, BookOpen, Trophy, MapPin, Award } from 'lucide-react';
import schoolImage from '../assets/School.jpg';
import schoolGateImage from '../assets/Schoolgate.jpg';
import campusImage from '../assets/Campus.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data for carousel images
  const carouselImages = [
    {
      src: schoolImage,
      alt: 'School Campus',
      caption: 'Beautiful campus environment fostering learning and growth'
    },
    {
      src: schoolGateImage,
      alt: 'Students Learning',
      caption: 'Dedicated students engaged in academic excellence'
    },
    {
      src: campusImage,
      alt: 'School Activities',
      caption: 'Extracurricular activities building character and skills'
    }
  ];

  // Sample notices data
  const notices = [
    {
      id: 1,
      date: '2026-05-01',
      title: 'Admission Open for Academic Year 2026-2027',
      content: 'Applications are now open for admission to classes 1-12. Limited seats available.',
      fullContent: 'We are pleased to announce that admission applications for the academic year 2026-2027 are now open. We offer admission to classes 1 through 12 with limited seats available. Interested parents and students are requested to submit their applications online through our admission portal. The admission process will continue until May 15, 2026. For more information, please contact the admission office.'
    },
    {
      id: 2,
      date: '2026-04-28',
      title: 'Annual Sports Day Scheduled for May 10',
      content: 'Annual sports day will be held on May 10, 2026. All students are requested to participate.',
      fullContent: 'The annual sports day is scheduled for May 10, 2026. This year\'s theme is "Unity in Diversity". All students from classes 1-12 are encouraged to participate in various sporting events including track and field, team sports, and individual competitions. The event will showcase the athletic talents of our students and promote healthy competition and sportsmanship.'
    },
    {
      id: 3,
      date: '2026-04-25',
      title: 'Parent-Teacher Meeting on May 5',
      content: 'Parent-teacher meeting scheduled for May 5, 2026. Parents are requested to attend.',
      fullContent: 'A parent-teacher meeting is scheduled for May 5, 2026, from 9:00 AM to 4:00 PM. This meeting provides an opportunity for parents to discuss their child\'s academic progress, behavior, and overall development with teachers. Parents are requested to attend the meeting and actively participate in discussions about their child\'s future.'
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className='min-h-screen bg-gray-50'>

      {/* Sticky Breaking News Bar */}
      <div className=' sticky top-16 z-40 bg-gray-300 text-black py-2 border-b-2 border-gray-400 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 flex items-center gap-3'>
          <span className='font-bold text-lg whitespace-nowrap animate-pulse'>🔴 BREAKING</span>
          <div className='flex-1 overflow-hidden'>
            <motion.div
              animate={{ x: ['100%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className='whitespace-nowrap text-sm font-semibold'
            >
              • Admission open for 2026-2027 • Parent-Teacher Meeting on May 5

            </motion.div>

          </div>
        </div>
      </div>

     

      {/* Image Carousel */}
      <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden bg-gray-300'>

        <motion.img
          key={currentImageIndex}
          src={carouselImages[currentImageIndex].src}
          alt={carouselImages[currentImageIndex].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='absolute inset-0 w-full h-full object-cover'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40 flex items-end z-10'>
          <div className='p-4 sm:p-6 md:p-10 text-white'>
            <motion.p
              key={carouselImages[currentImageIndex].caption}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-sm sm:text-lg md:text-xl font-semibold max-w-2xl'
            >
              {carouselImages[currentImageIndex].caption}
            </motion.p>
          </div>
        </div>

        {/* Indicators */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20'>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50'
                }`}
            />
          ))}
        </div>

      </div>
      {/* Overview Section */}
      <div className='py-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-green-600 mb-6'>Overview</h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='text-justify text-gray-700'>
                  Shahjalal University School and College is a premier educational institution committed to
                  providing quality education and holistic development to students from classes nursey through 12.
                  Established with a vision to create future leaders, our school combines traditional values
                  with modern teaching methodologies, ensuring academic excellence and character building.
                  We offer comprehensive education with state-of-the-art facilities, experienced faculty,
                  and a nurturing environment that fosters creativity, critical thinking, and social responsibility.
              </div>
              <div className='bg-green-50 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold text-green-800 mb-4'>Our Mission</h3>
                <p className='text-green-700 mb-4'>
                  To provide quality education that empowers students to become responsible citizens
                  and contribute positively to society.
                </p>
                <Link
                  to="/VisionAndMission"
                  className='inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300'
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12'
          >
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <Calendar className='w-8 h-8 text-green-600 mx-auto mb-3' />
              <p className='text-sm text-gray-600'>Founded</p>
              <p className='text-2xl font-bold text-gray-900'>2005</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <Users className='w-8 h-8 text-green-600 mx-auto mb-3' />
              <p className='text-sm text-gray-600'>Faculty</p>
              <p className='text-2xl font-bold text-gray-900'>20</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <GraduationCap className='w-8 h-8 text-green-600 mx-auto mb-3' />
              <p className='text-sm text-gray-600'>Students</p>
              <p className='text-2xl font-bold text-gray-900'>2000+</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <BookOpen className='w-8 h-8 text-green-600 mx-auto mb-3' />
              <p className='text-sm text-gray-600'>Classes</p>
              <p className='text-2xl font-bold text-gray-900'>1-12</p>
            </div>
          </motion.div>

          {/* Rankings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='bg-white text-gray-900 p-8 shadow-lg rounded-xl mb-12'
          >
            <h3 className='text-2xl font-bold text-green-600 text-center mb-6'>National Rankings</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
              <div>
                <Trophy className='w-10 h-10 mx-auto mb-2' />
                <p className='text-3xl font-bold'>100</p>
                <p className='text-sm opacity-90'>National Ranking</p>
              </div>
              <div>
                <MapPin className='w-10 h-10 mx-auto mb-2' />
                <p className='text-3xl font-bold'>10</p>
                <p className='text-sm opacity-90'>Sylhet Division</p>
              </div>
              <div>
                <Award className='w-10 h-10 mx-auto mb-2' />
                <p className='text-3xl font-bold'>20</p>
                <p className='text-sm opacity-90'>Sylhet Board</p>
              </div>
              <div>
                <Award className='w-10 h-10 mx-auto mb-2' />
                <p className='text-3xl font-bold'>2</p>
                <p className='text-sm opacity-90'>Sylhet District</p>
              </div>
            </div>
          </motion.div>

          {/* Notice Board */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className='bg-white rounded-xl shadow-lg p-6 md:p-8'
          >
            <h3 className='text-2xl font-bold text-green-600 mb-6 text-center'>Notice Board</h3>
            <div className='space-y-4'>
              {notices.slice(0, 3).map((notice) => (
                <div key={notice.id} className='border-l-4 border-green-500 pl-4 py-3 hover:bg-gray-50 transition duration-300'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex-1'>
                      <p className='text-sm text-green-600 font-medium mb-1'>{notice.date}</p>
                      <h4 className='font-semibold text-gray-900 mb-2'>{notice.title}</h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>{notice.content}</p>
                    </div>
                    <Link
                      to={`/notice/${notice.id}`}
                      className='mt-3 md:mt-0 md:ml-4 text-green-600 hover:text-green-700 font-medium text-sm'
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center mt-6'>
              <Link
                to="/notice-board"
                className='inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300'
              >
                View All Notices
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;