import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navbar bg-primary'>
			<Link to='/' className='text-light mx-auto text-decoration-none fs-1'>
				Github Finder
			</Link>
		</nav>
	);
};

export default Header;
