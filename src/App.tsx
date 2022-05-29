import './scss/App.scss';
import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { SideBar } from './pages/SideBar/SideBar';
import { NavBar } from './pages/NavBar/NavBar';
import { About } from './pages/About/About';
import { Experience } from './pages/Experience/Experience';
import { Services } from './pages/Services/Services';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Testimonials } from './pages/Testimonials/Testimonials';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Home />
			<SideBar />
			<NavBar />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
