import { React, useState } from 'react'
import "./navbar.css"
import img from "../../assents/portfolio.png"
import img1 from "../../assents/reactLogo.png"
import img2 from "../../assents/java.png"

function Navbar() {
  const [media, setMedia] = useState(false)
  const [scrool, setScrool] = useState(true)
  function name() {
    if (window.scrollY >= 200) {
      setScrool(true)
    } else {
      setScrool(false)
    }
  }
  window.addEventListener('scroll', name)
  return (
    <>
      <div className={scrool ? "Navbars" : "Navbar"} style={{
        height: media ? "auto" : "70px",
      }} >
        <div className="navbarLogo">
          <img src={img} alt="" />
        </div>
        <div onClick={() => setMedia(!media)} className="navbarMedia">
          <i className="fa fa-bars" ></i>
        </div>
        <div className="navbarMenu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Partners</a>
          <a href="">Contact</a>
        </div>
        <div className="navbarLogo2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar