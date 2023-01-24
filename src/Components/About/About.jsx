import React from 'react'
import './About.css'
import Me from '../../img/me.png'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by readable content.
          </p>
          <p className="a-desc">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">National award for development</h4>
              <p className="a-award-desc">
              At consectetur lorem donec massa sapien faucibus molestie ac. Accumsan tortor posuere ac ut semper. Morbi leo urna molestie at elementum.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About