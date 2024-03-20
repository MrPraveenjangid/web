import React from 'react'
import img from '../images/react-icon-2048x2048-o8k3ymqa.png'
import Header from '../components/Header'

export default function Skills() {
  return (
    <>
      <Header />
      <section>
        <div className="skill_main w-100 skill___">
        <div className="skills_images">
            <div className="blue-bg-outer">
              <div className="white-bg">
                <div className="myimg_skill blue-bg overflow-hidden ">
                  <img className='myimg_skill' src={img} alt="image" />
                </div>
              </div>
            </div>
          </div>
        <div>
          <ul>
            <h1>Skills</h1>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JAVASCRIPT</li>
            <li>BOOTSTRAP</li>
            <li>TAILWIND CSS</li>
            <li>GIT HUB</li>
            <li>NEXT.JS</li>
            <li>NODE.JS</li>
            <li>MONGODB</li>
            <li>JQUERY</li>
            <li>REACT.JS</li>
            <li>ADAPTIVE DESIGN</li>
            <li>EXPRESS.JS</li>
            <li>MERN STACK</li>
          </ul>
        </div>
        </div>
      </section>
    </>
  )
}
