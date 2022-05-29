import CV from '../assets/cv.pdf';
import ME from '../assets/img/me-transparent-1.png';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { CgToggleOff, CgToggleOn } from 'react-icons/cg';

export const Home = () => {
	return (
		<section id='home'>
			<div className='language'>
				<div className='language__flags'>
					<div className='language__flags__usa' data-language='en'>
						<img src='../assets/icons/language/usa.svg' alt='English' />
						<CgToggleOn />
					</div>
					<div className='language__flags__mx' data-language='es'>
						<img src='../assets/icons/language/mex.svg' alt='Español' />
						<CgToggleOff />
					</div>
				</div>
			</div>
			<h4>
				Hey!! <span id='welcome'>welcome</span> to my site:
			</h4>
			<picture>
				<img src={ME} alt='' />
			</picture>
			<h1>FM DEV-mx.com</h1>
			<h2>
				I&apos;m <span id='yomero'>Francisco Mendoza</span>,<br /> a <span id='frondev'>frontend developer</span>
			</h2>
			<p className='home__same__line'>
				let me show you how can I help you!!{' '}
				<span className='home__same__line__icon'>
					&nbsp;&nbsp;&nbsp;&nbsp;...{' '}
					<a href='#experience' title='My Experience'>
						Scroll down <HiChevronDoubleDown />
					</a>
				</span>
			</p>
			<div className='home__button'>
				<a href={CV} download className='buttonMixim__primary'>
					Download CV
				</a>
				<a href='#contact' className='buttonMixim__secondary'>
					Let&apos;s Talk
				</a>
			</div>
			<a href='#contact' className='home__scrollDown'>
				Scroll Down
			</a>
		</section>
	);
};

export default Home;
