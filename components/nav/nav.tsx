import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<div className='nav'>
				<Link href='/about'>About</Link>
				<div className='logo'>
					<Image
						src='/assets/images/FlemingPictures.png'
						alt='logo'
						height='500'
						width='500'
					/>
				</div>
				<Link href='/connect'>Connect</Link>
			</div>
		</nav>
	);
}
