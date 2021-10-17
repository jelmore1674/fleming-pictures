import React from 'react';

import PosterItem from '../poster-items/poster-items';

import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';

export default function PosterGrid({ featuredFilms }: FeaturedFilms) {
	return (
		<div className='poster-grid'>
			<h3 className='heading'>Other Films</h3>
			<div className='grid-container'>
				{featuredFilms.map(
					(featuredFilm: FeaturedFilm, index: number) => {
						return (
							<PosterItem
								key={index}
								poster={featuredFilm.posterImg}
							/>
						);
					}
				)}
			</div>
		</div>
	);
}
