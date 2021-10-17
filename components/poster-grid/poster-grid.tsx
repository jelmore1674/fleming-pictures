import React from 'react';
import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';

function PosterItem({ poster }: any) {
	return (
		<div className='poster-item'>
			<div
				className='poster-image'
				style={{
					backgroundImage: ` url(${poster})`,
				}}>
				PosterItem
			</div>
		</div>
	);
}

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
