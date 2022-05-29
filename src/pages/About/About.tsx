import ME from '../assets/img/me-black-6.png';
import { RiAwardFill } from 'react-icons/ri';
import { GiShakingHands } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

export const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__img-text-row'>
					<div className='about__img-btn-col'>
						<div className='about__img-full'>
							<div className='about__me-image-frame'>
								<div className='about__me-image'>
									<img src={ME} alt='FM-Dev-Mx' />
								</div>
							</div>
						</div>
						<div className='about__btn'>
							<a href='#contact' className='btn'>
								Let&apos;s Talk
							</a>
						</div>
					</div>
					<div className='about__parrapah-cards-col'>
						<div className='about__parraph'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aliquid ullam molestias necessitatibus
								ad, dolores consequatur harum modi quibusdam optio dolorem earum animi natus ipsa officia odit eius quo
								atque quam! Possimus quod vitae corporis a facere repudiandae alias odit eius explicabo repellendus velit
								nisi consequuntur, voluptatum quisquam rem vero, nobis deleniti officia provident dolor aspernatur inventore
								hic fugiat. Blanditiis suscipit eum qui eos, accusamus tempore fugiat sequi officia asperiores? Nobis ut
								quis nulla? Nostrum nisi totam saepe mollitia dolorem!
							</p>
						</div>
						<div className='about__cards'>
							<article className='about__card'>
								<RiAwardFill className='about__icon' />
								<h5>Experience</h5>
								<small>3+ Years Working</small>
							</article>

							<article className='about__card'>
								<GiShakingHands className='about__icon' />
								<h5>Clients</h5>
								<small>Who Working With Me</small>
							</article>

							<article className='about__card'>
								<AiOutlineFundProjectionScreen className='about__icon' />
								<h5>Projects</h5>
								<small>10+ Completed</small>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
