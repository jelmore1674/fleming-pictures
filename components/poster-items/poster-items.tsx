import React from 'react';
import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';

export default function PosterItem({ poster }: any) {
	return (
		<div className='poster-item'>
			<div
				className='poster-image'
				style={{
					backgroundImage: ` url(${poster})`,
				}}></div>
		</div>
	);
}
