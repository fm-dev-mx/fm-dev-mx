import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';

export const SideBar = () => {
	return (
		<div className='side__bar'>
			<div className='side__bar__arrow'>
				<GoChevronUp />
			</div>
			<a href='https://www.linkedin.com/in/francisco-mendoza-ordn/' title='LinkedIn' target='_blank' rel='noopener noreferrer'>
				<BsLinkedin />
			</a>
			<a href='https://github.com/fm-dev-mx' title='GitHub' target='_blank' rel='noopener noreferrer'>
				<BsGithub />
			</a>
			<a href='mailto:frgmendoza@gmail.com' title='Send Email' target='_blank' rel='noopener noreferrer'>
				<SiGmail />
			</a>
			<a href='https://wa.me/526563769461' title='Send WhatsApp' target='_blank' rel='noopener noreferrer'>
				<BsWhatsapp />
			</a>
			<div className='side__bar__arrow'>
				<GoChevronDown />
			</div>
		</div>
	);
};

export default SideBar;
