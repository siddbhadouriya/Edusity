import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
             <img src={play_icon } alt="" className='play-icon'/>
        </div>
         <div className='about-right'>
            <h3> ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Our university is a hub of academic excellence, fostering innovation and research.
                  It offers a wide range of programs designed to meet global standards.</p> 
            <p>The university provides quality education in science, arts, and technology.
               Students benefit from hands-on learning and industry exposure.
                </p>
             <p>Studying at this university is a life-changing experience!
               It combines great teaching, exciting opportunities, and strong community support.
                </p>

         </div>
      
    </div>
  )
}

export default About
