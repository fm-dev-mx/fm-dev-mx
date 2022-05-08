import React from 'react';
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/francisco-mendoza-ordn/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/fm-dev-mx' target="_blank"><BsGithub/></a>
        <a href='mailto:frgmendoza@gmail.com' target="_blank"><SiGmail/></a>
        <a href='https://wa.me/526563769461' target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials