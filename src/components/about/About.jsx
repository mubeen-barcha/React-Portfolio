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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius placeat dicta fuga fugit, facilis debitis
       </p>
       <p className='a-desc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quidem, tempora atque quam non cumque nam enim iusto corporis eius nisi, libero dolorum reprehenderit hic et accusantium quasi fugiat harum.
       </p>
       <div className="a-award">
        <img src={Award} alt="" className='a-award-img' />
        <div className='a-award-texts'>
            <h4 className='a-award-title'>International Design</h4>
            <p className='a-award-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam cupiditate voluptate? Molestiae ipsum expedita praesentium dignissimos culpa explicabo, eius doloremque ad </p>

        </div>
       </div>
        </div>
    </div>
  )
}

export default About