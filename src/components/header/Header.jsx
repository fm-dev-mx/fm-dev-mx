import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/img/me-transparent-1.png'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Francisco Mendoza</h1>
        <h4 className='text-light'>Software Developer Jr</h4>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <CTA />
        <HeaderSocials />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header