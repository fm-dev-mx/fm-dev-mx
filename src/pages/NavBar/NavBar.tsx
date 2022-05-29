import { GrHomeRounded } from 'react-icons/gr';
import { GoTools } from 'react-icons/go';
import { BsInfoCircle } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';
import { useState } from 'react';

export const NavBar = () => {
	const [activeNavBar, setActiveNavBar] = useState('#');
	return (
		<nav>
			<a href='#' title='Home' onClick={() => setActiveNavBar('#')} className={activeNavBar === '#' ? 'active' : ''}>
				<GrHomeRounded />
			</a>
			<a
				href='#experience'
				title='My Experience'
				onClick={() => setActiveNavBar('#experience')}
				className={activeNavBar === '#experience' ? 'active' : ''}
			>
				<GiSkills />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNavBar('#services')}
				title='Services'
				className={activeNavBar === '#services' ? 'active' : ''}
			>
				<GoTools />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNavBar('#contact')}
				title='Contact Me!'
				className={activeNavBar === '#contact' ? 'active' : ''}
			>
				<RiMailSendLine />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNavBar('#about')}
				title='About Me!'
				className={activeNavBar === '#about' ? 'active' : ''}
			>
				<BsInfoCircle />
			</a>
		</nav>
	);
};

export default NavBar;
