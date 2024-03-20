import React from 'react'
import img from '../images/passport.size.jpg'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Skills from './Skills'

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="main">
          <div className="images">
            <div className="blue-bg-outer">
              <div className="white-bg">
                <div className="blue-bg overflow-hidden ">
                  <img className='myimg' src={img} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="Information">
            <h1>Hi, I'm Praveen</h1>
            <div className="animated_text">
              <h1 className="title">React.Js Developer</h1>

            </div>
            <div className="social">

            </div>
            <Link to={"/Skills"} className="cv-btn" >Know More</Link>
          </div>
          <div className='home_p'>
            <p> " I'M A Professlonal Web Developer. Our Main Goal Is To Help & Sattisficed </p><p> The Local & Global Clients By Web Developement Solutions "</p>
          </div>
        </div>
      </section>
    </>
  )
}
