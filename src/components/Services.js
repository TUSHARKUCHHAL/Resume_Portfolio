import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What's my'</p>
                    <p className='heading-text'>Qualification</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <FaGraduationCap className='services-icon' />
                        <p className='services-title'>B.Tech</p>
                        <p className='services-desc'>I am pursuing a Bachelor's degree in Technology with specialization in Data Science from Bennett University and my current CGPA is <b>9.0</b>.</p>
                    </div>
                    <div className="services-card">
                        <FaBookOpen className='services-icon' />
                        <p className='services-title'>High School</p>
                        <p className='services-desc'>I completed my high school education with a focus on science and mathematics, achieving <b>89.6%</b> from D.A.V. Multipurpose Public School.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
