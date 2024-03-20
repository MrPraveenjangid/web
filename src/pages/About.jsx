import React from 'react'
import img from '../images/passport.size.jpg'
import Header from '../components/Header'

export default function About() {
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
        </div>
      </section>
    </>
  )
}
