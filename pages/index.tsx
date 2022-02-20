import type { NextPage } from 'next';
import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/nav/nav';
import FeaturedSection from '../components/featured/featured';
import PosterGrid from '../components/poster-grid/poster-grid';
import Modal from '../components/modal/modal';
import Portal from '../components/portal/portal';
import { createClient } from 'contentful';
const featuredFilms = [
	{
		title: 'The Chronus',
		featuredImg: '/assets/images/chronus1920x1080.png',
		posterImg: '/assets/images/chronos2x3.png',
		trailer: '/assets/clips/trailer.mp4',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		title: 'Another Film',
		featuredImg: '/assets/images/featured2.png',
		posterImg: '/assets/images/poster2.png',
		trailer: 'https://www.youtube.com/watch?v=GOysW6WYWoE',
		sypnosis:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
];

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE as string,
		accessToken: process.env.CONTENTFUL_API_TOKEN as string,
	});

	const res = await client.getEntries({
		order: 'sys.createdAt',
		content_type: 'movie',
	});

	return {
		props: {
			films: res.items,
		},
		revalidate: 30,
	};
}

const Home: NextPage = ({ films }: any) => {
	const [modalFilm, setModalFilm] = React.useState(featuredFilms[0]);
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	let featured: any = [];
	films.forEach((film: any) => {
		if (film.fields.isFeatured) {
			featured.push(film);
		}
	});

	function closeModal() {
		setIsModalOpen(false);
	}

	function openModal(film: any) {
		setModalFilm(film);
		setIsModalOpen(true);
	}

	return (
		<div>
			<FeaturedSection featuredFilms={featured} openModal={openModal} />
			<PosterGrid featuredFilms={films} />
			{isModalOpen && (
				<Portal>
					<Modal film={modalFilm} closeModal={closeModal} />
				</Portal>
			)}
		</div>
	);
};

export default Home;
