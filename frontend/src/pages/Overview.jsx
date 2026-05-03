import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, GraduationCap, BookOpen, Trophy, MapPin, Award, Target, Heart, Lightbulb } from 'lucide-react';

const Overview = () => {
  return (
    <div className='min-h-screen bg-gray-50'>

      <div className='max-w-6xl mx-auto px-4 md:px-8 py-16'>
        {/* History Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-green-600 mb-8 text-center'>Overview</h2>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-4 text-justify'>
                Founded in 2005, Shahjalal University School and College has been a beacon of educational excellence
                in Sylhet for over two decades. Our institution was established with a vision to provide quality
                education that combines traditional values with modern teaching methodologies.
                Since our inception, we have grown from a small educational facility to one of the most respected
                schools in the region, serving over 2000 students from classes 1 through 12. Our commitment to
                academic excellence and character development has made us a preferred choice for parents seeking
                comprehensive education for their children.
            </div>
            <div className='bg-green-50 p-6 rounded-lg'>
              <Calendar className='w-12 h-12 text-green-600 mb-4' />
              <h3 className='text-xl font-semibold text-green-800 mb-2'>Established 2005</h3>
              <p className='text-green-700'>Over 20 years of educational excellence</p>
            </div>
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-green-600 mb-8 text-center'>By the Numbers</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <Users className='w-10 h-10 text-green-600 mx-auto mb-3' />
              <p className='text-3xl font-bold text-gray-900'>20</p>
              <p className='text-gray-600'>Experienced Faculty</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <GraduationCap className='w-10 h-10 text-green-600 mx-auto mb-3' />
              <p className='text-3xl font-bold text-gray-900'>2000+</p>
              <p className='text-gray-600'>Students Enrolled</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <BookOpen className='w-10 h-10 text-green-600 mx-auto mb-3' />
              <p className='text-3xl font-bold text-gray-900'>12</p>
              <p className='text-gray-600'>Grade Levels</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300'>
              <Heart className='w-10 h-10 text-green-600 mx-auto mb-3' />
              <p className='text-3xl font-bold text-gray-900'>100%</p>
              <p className='text-gray-600'>Pass Rate</p>
            </div>
          </div>
        </motion.section>

        {/* Rankings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-green-600 mb-8 text-center'>Academic Rankings</h2>
          <div className='bg-gray-100 shadow-lg text-gray-900 p-8 rounded-xl'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
              <div>
                <Trophy className='w-12 h-12 mx-auto mb-3' />
                <p className='text-4xl font-bold'>100</p>
                <p className='text-sm opacity-90'>National Ranking</p>
              </div>
              <div>
                <MapPin className='w-12 h-12 mx-auto mb-3' />
                <p className='text-4xl font-bold'>10</p>
                <p className='text-sm opacity-90'>Sylhet Division</p>
              </div>
              <div>
                <Award className='w-12 h-12 mx-auto mb-3' />
                <p className='text-4xl font-bold'>20</p>
                <p className='text-sm opacity-90'>Sylhet Board</p>
              </div>
              <div>
                <Award className='w-12 h-12 mx-auto mb-3' />
                <p className='text-4xl font-bold'>2</p>
                <p className='text-sm opacity-90'>Sylhet District</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Facilities & Programs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-green-600 mb-8 text-center'>Facilities & Programs</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Academic Excellence</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• Comprehensive curriculum (Classes 1-12)</li>
                <li>• Qualified and experienced faculty</li>
                <li>• Modern teaching methodologies</li>
                <li>• Regular assessments and feedback</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Co-curricular Activities</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• Sports and physical education</li>
                <li>• Cultural programs and events</li>
                <li>• Science and technology clubs</li>
                <li>• Community service initiatives</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>Infrastructure</h3>
              <ul className='space-y-2 text-gray-700'>
                <li>• Modern classrooms and labs</li>
                <li>• Well-equipped library</li>
                <li>• Sports facilities</li>
                <li>• Safe and secure campus</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <div className='bg-green-50 p-8 rounded-xl'>
            <h2 className='text-2xl font-bold text-green-600 mb-4'>Join Our Community</h2>
            <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
              Experience the difference that quality education makes. Join thousands of students who have
              achieved their dreams at Shahjalal University School and College.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to="/onlineadmission"
                className='bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300'
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                className='border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Overview;