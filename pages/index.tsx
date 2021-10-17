import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav/nav';
import FeaturedSection from '../components/featured/featured';
import PosterGrid from '../components/poster-grid/poster-grid';
import Modal from '../components/modal/modal'
const featuredFilms = [
	{
		title: 'Film Title Here',
		featuredImg: '/assets/images/featured1.png',
		posterImg: '/assets/images/chronos2x3.png',
		trailer:
			'/assets/clips/trailer.mp4',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Another Film',
		featuredImg: '/assets/images/featured2.png',
		posterImg: '/assets/images/poster2.png',
		trailer:
			'blob:https://www.youtube.com/02c39461-4044-4c77-8f21-181bb4bec043',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Film Title Here',
		featuredImg: '/assets/images/featured1.png',
		posterImg: '/assets/images/chronos2x3.png',
		trailer:
			'blob:https://www.youtube.com/a5512c08-80c0-4c67-bafd-b865ac6e0f50',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Film Title Here',
		featuredImg: '/assets/images/featured1.png',
		posterImg: '/assets/images/chronos2x3.png',
		trailer:
			'blob:https://www.youtube.com/a5512c08-80c0-4c67-bafd-b865ac6e0f50',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Film Title Here',
		featuredImg: '/assets/images/featured1.png',
		posterImg: '/assets/images/chronos2x3.png',
		trailer:
			'blob:https://www.youtube.com/a5512c08-80c0-4c67-bafd-b865ac6e0f50',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
];

const Home: NextPage = () => {
	return (
		<div>
			<FeaturedSection featuredFilms={featuredFilms} />
			<PosterGrid featuredFilms={featuredFilms} />
			<Modal film={featuredFilms[0]}/>
		</div> 
	);
};

export default Home;
