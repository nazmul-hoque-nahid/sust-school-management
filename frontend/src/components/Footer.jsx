import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-linear-to-t from-gray-900 to-gray-600 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='hidden md:block'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            {/* About Us */}
            <div>
              <h3 className='font-bold mb-4'>About Us</h3>
              <ul className='space-y-2'>
                <li><Link to="/overview" className='hover:underline'>Overview</Link></li>
                <li><Link to="/history" className='hover:underline'>History</Link></li>
                {/* <li><Link to="/whystudyat" className='hover:underline'>Why Study At</Link></li> */}
                {/* <li><Link to="/visionandmission" className='hover:underline'>Vision and Mission</Link></li>
                <li><Link to="/achievements" className='hover:underline'>Achievements</Link></li> */}
                <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
                {/* <li><Link to="/collegefactsandacts" className='hover:underline'>College Facts and Acts</Link></li> */}
                <li><Link to="/location" className='hover:underline'>Location</Link></li>
              </ul>
            </div>

            {/* Academic */}
            <div>
              <h3 className='font-bold mb-4'>Academic</h3>
              <ul className='space-y-2'>
                <li><Link to="/calendar" className='hover:underline'>Calendar</Link></li>
                <li><Link to="/syllabus" className='hover:underline'>Syllabus</Link></li>
                <li><Link to="/textbook" className='hover:underline'>Textbook</Link></li>
                <li><Link to="/classteacher" className='hover:underline'>Class Teacher</Link></li>
                <li><Link to="/classroutine" className='hover:underline'>Class Routine</Link></li>
                <li><Link to="/examroutine" className='hover:underline'>Exam Routine</Link></li>
                <li><Link to="/results" className='hover:underline'>Results</Link></li>
              </ul>
            </div>

            {/* Administration */}
            <div>
              <h3 className='font-bold mb-4'>Administration</h3>
              <ul className='space-y-2'>
                <li><Link to="/governingbody" className='hover:underline'>Governing Body</Link></li>
                <li><Link to="/messageofchairman" className='hover:underline'>Message of Chairman</Link></li>
                <li><Link to="/messageofprinciple" className='hover:underline'>Message of Principle</Link></li>
                <li><Link to="/teacherinformation" className='hover:underline'>Teacher Information</Link></li>
                <li><Link to="/staffinformation" className='hover:underline'>Staff Information</Link></li>
              </ul>
            </div>

            {/* Admission */}
            <div>
              <h3 className='font-bold mb-4'>Admission</h3>
              <ul className='space-y-2'>
                <li><Link to="/onlineadmission" className='hover:underline'>Online Admission</Link></li>
                <li><Link to="/circular" className='hover:underline'>Circular</Link></li>
                <li><Link to="/prospectus" className='hover:underline'>Prospectus</Link></li>
                <li><Link to="/admissionresult" className='hover:underline'>Admission Result</Link></li>
                <li><Link to="/waitinglist" className='hover:underline'>Waiting List</Link></li>
                <li><Link to="/feeschart" className='hover:underline'>Fees Chart</Link></li>
              </ul>
            </div>

            {/* Campus Life */}
            <div>
              <h3 className='font-bold mb-4'>Campus Life</h3>
              <ul className='space-y-2'>
                <li><Link to="/cocurricular" className='hover:underline'>Co Curricular</Link></li>
                <li><Link to="/clubandsociety" className='hover:underline'>Club and Society</Link></li>
                <li><Link to="/magazine" className='hover:underline'>Magazine</Link></li>
                <li><Link to="/gallery" className='hover:underline'>Gallery</Link></li>
                <li><Link to="/library" className='hover:underline'>Library</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Follow us */}
        <div className='mt-8 text-center items-center justify-center space-x-4 flex'>
          <h4 className='font-bold mb-2 mt-2 text-xl'>Follow Us On</h4>
          <div className='flex justify-center space-x-2'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='items-center justify-center flex hover:opacity-75  bg-blue-500 rounded-3xl w-10 h-10'>
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className='items-center justify-center flex hover:opacity-75 bg-white rounded-3xl w-10 h-10'>
              <Twitter className="w-8 h-8 text-gray-900" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-4 text-center'>
          Copyright @SUSC 2026
        </div>
      </div>
    </div>
  );
};

export default Footer;