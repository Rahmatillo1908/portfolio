import React from 'react'
import "./home.css"
import home1 from "../../assents/home1.png"
function Home() {
  return (
    <>
      <div className="home">
       <div className="containers">
       <div className="homeLeft">
        <div className='w-100'>
          <h1>Hello Everyone</h1>
          <h1>I am Umarov Rahmatillo </h1>
          <h1> Web Developer</h1>
        </div>
        </div>
        <div className="homeRight">
          <img className='w-75 h-75' src={home1} alt="" />
        </div>
       </div>
      </div>

    </>
  )
}

export default Home