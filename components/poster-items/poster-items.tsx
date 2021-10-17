import React from 'react';
import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';

export default function PosterItem(featuredFilm: FeaturedFilm) {
	return (
		<div
			className='poster-item'
			style={{
				backgroundImage: ` url(${featuredFilm.posterImg})`,
			}}>
			{console.log(featuredFilm.posterImg)}
			PosterItem
		</div>
	);
}
