import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, GraduationCap, Award } from 'lucide-react';
import SchoolBuilding from '../assets/SchoolBuilding.jpg';

const VisionAndMission = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Image Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mb-20 overflow-hidden rounded-b-lg shadow-2xl "
      >
        <img
          src={SchoolBuilding}
          alt="School Building"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute  inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Vision & Mission
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-sm sm:text-lg md:text-xl text-gray-200"
          >
            Empowering students with knowledge, creativity, and leadership
            to build a brighter future.
          </motion.p>

        </div>

      </motion.section>



      {/* Mission & Vision Cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}  
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-green-600">
            <Target className="w-14 h-14 text-green-600 mb-5" />

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 text-justify leading-relaxed text-lg">
              To provide quality education that empowers students to become
              responsible citizens, critical thinkers, and future leaders.
              We create an environment where every learner can explore their
              talents and achieve academic excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600">
            <Lightbulb className="w-14 h-14 text-green-600 mb-5" />

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 text-justify leading-relaxed text-lg">
              To become a leading educational institution that nurtures
              innovation, creativity, and leadership while preparing students
              for the challenges of the modern world and inspiring them to
              create positive change in society.
            </p>
          </div>
        </div>
      </motion.section>


    </div>
  );
};

export default VisionAndMission;