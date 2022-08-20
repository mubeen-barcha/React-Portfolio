import React from 'react'
import "../about/about.css"
import Award from "../../img/award.png"

function About() {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img 
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" 
            className='a-img'/>
          </div>
        </div>
        <div className="a-right">
       <h1 className='a-title'>About me</h1>
       <p className='a-sub'>
       A Front End Developer is a person who will use any of the frameworks or the packages such as Jquery, Angular JS, Angular JS 2, NodeJS, ReactJs, backboneJS, Bootstrap, etc
       </p>
       <p className='a-desc'>
        Meticulous web developer with over 1 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach.
       </p>
       <div className="a-award">
        <img src={Award} alt="" className='a-award-img' />
        <div className='a-award-texts'>
            <h4 className='a-award-title'>Front end Development</h4>
            <p className='a-award-desc'>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>

        </div>
       </div>
        </div>
    </div>
  )
}

export default About