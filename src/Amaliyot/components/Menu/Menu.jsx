import React, { useState } from 'react'
import "./menu.css"
import { FaBars, FaX } from "react-icons/fa6";
function Menu() {
    const [menu, setMenu] = useState(true)
    const [upload, setUpload] = useState(localStorage.getItem("img"))
    const uploads = (e)=>{
        console.log(e.target.files);
        setUpload(URL.createObjectURL(e.target.files[0]))
        localStorage.setItem("img", upload)
    }
    return (
        <>
            <i className='menuIcon' onClick={() => setMenu(false)} ><FaBars /></i>
            <div className="menu" style={{ marginLeft: menu ? "-350px" : "0px" }}>
                <div className="meniImg">
               <img src={upload} alt="" />
                    <input type="file" onChange={uploads} />
                    <i onClick={() => setMenu(true)} > <FaX /></i>
                </div>
                <div className="menuProfile">
                    <p>My Profile</p>
                    <p>Account Settings</p>
                    <p>Can I Help ?</p>
                    <p>Sign Out</p>
                </div>
            </div>


        </>
    )
}

export default Menu