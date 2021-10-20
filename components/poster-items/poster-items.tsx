import React from 'react';
import Image from 'next/image';
import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';

export default function PosterItem({ poster, title }: any) {
	return (
		<div className='poster-item'>
			<div className='poster-image'>
				<Image src={poster} alt='poster' height='333' width='223' />
			</div>
			<div className='film-title'>{title}</div>
		</div>
	);
}
