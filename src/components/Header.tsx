import { CgToggleOff, CgToggleOn } from 'react-icons/cg';
import { Link } from 'react-router-dom';
//  import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import styles from './Header.module.css';

export function Header() {
	//  const { user } = useUserStorage();
	//  const { cart } = useCartStorage();

	return (
		<header className={styles.header}>
			<Link className={styles.logo} to='/'>
				{/* Co0o0o0o0okie!!!1 🍪  */}
			</Link>
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
			{/*    {!user ? (
        <Link to="/auth">Log in</Link>
      ) : (
        <Link to="/user">
          {user.name} ({cart.products.length})
        </Link>
      )} */}
		</header>
	);
}
