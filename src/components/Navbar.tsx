import React from 'react'
import { Link } from 'react-router-dom';
import hambuger from "../assets/menu-bar.svg";
import {FaDumbbell} from "react-icons/fa"
import Form from './Form';
import { useState } from 'react';


const Navbar = () => {
    const [isActive, setIsActive] = useState(true)
  return (
    <header className="bg-gold w-full py-3 px-4 ">
        <nav className="container mx-auto flex flex-row justify-between items-center">
            <div className="logo flex justify-center z-10">
                <Link className="w-full text-md md:text-2xl text-white flex justify-center items-center z-10" to={"/"}>goFit <FaDumbbell className='text-orange ml-2 mt-2'/></Link>
            </div>
              
            {/* <ul className="nav__items flex justify-center flex-row space-x-4 hidden md:flex">
              <li> <Link className="text-md text-white"  to={"/exercises"}>Exercises</Link> </li>    
              <li> <Link className="text-md text-white" to={"/equipements"}>Equipments</Link> </li>    
            </ul>
              
            <ul className={`nav__items flex justify-start pt-16 space-y-4 pl-4 flex-col top-0 left-0 bg-gold h-screen w-full absolute z-10 ${isActive ? "hidden" : ""}`}>
            <li> <Link className="text-xl  text-white" to={"/equipements"}>Equipments</Link> </li>    
            <li> <Link className="text-xl  text-white"  to={"/exercises"}>Exercises</Link> </li>    
            </ul> */}
        <Form/>
              {/* <div className="hambuger w-7 md:hidden z-10" onClick={() => setIsActive(!isActive)}>
                  <img src={hambuger} alt="" />
              </div> */}
              
        </nav>  
    </header>
  )
}

export default Navbar