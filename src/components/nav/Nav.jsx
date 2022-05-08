import React from 'react';
import "./nav.css";
import {GrHomeRounded} from "react-icons/gr";
import {GoTools} from "react-icons/go";
import {BsInfoCircle} from "react-icons/bs";
import {GiSkills} from "react-icons/gi";
import {RiMailSendLine} from "react-icons/ri";
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" title="Home" className={activeNav === '#' ? 'active' : ''}><GrHomeRounded/></a>
        <a href='#experience' title="My Experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills /></a>
        <a href='#services' onClick={()=>setActiveNav('#services')} title="Services" className={activeNav === '#services' ? 'active' : ''}><GoTools /></a>
        <a href='#contact' onClick={()=>setActiveNav('#contact')} title="Contact Me!" className={activeNav === '#contact' ? 'active' : ''}><RiMailSendLine /></a>
        <a href='#about' onClick={()=>setActiveNav('#about')} title="About Me!" className={activeNav === '#about' ? 'active' : ''}><BsInfoCircle /></a>
    </nav>
  )
}

export default Nav