import Image from 'next/image';
import Link from 'next/link';

import { Animated } from 'react-animated-css';

export default function Nav() {
	return (
		<nav>
			<div className='nav'>
				<div className='nav-item about-nav-item' data-testid='/about'>
					<Link href='/about'>About</Link>
				</div>

				<div className='logo' data-testid='logo'>
					<Link href='/#' passHref>
						<Image
							src='/assets/images/FlemingPictures.png'
							alt='logo'
							height='500'
							width='500'
						/>
					</Link>
				</div>
				<div
					className='nav-item connect-nav-item'
					data-testid='/connect'>
					<Link href='/connect'>Connect</Link>
				</div>
			</div>
		</nav>
	);
}
