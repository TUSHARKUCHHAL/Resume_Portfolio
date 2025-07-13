import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello! My name is Tushar and I enjoy creating things that live on the internet. Self-motivated and responsible engineering student with a passion for building useful and meaningful technology. Experienced in leading both technical and social projects, from starting a nonprofit to creating full-stack apps.  </p>
                        <br />
                        <p> Participated in national-level hackathons and worked on real-world problems with a practical approach. Known for taking initiative, working well in teams, and completing tasks with focus and dedication. My goal is to leverage data analysis to drive business solutions and improve user experiences.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
