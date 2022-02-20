import React from 'react';

import PosterItem from '../poster-items/poster-items';

import { FeaturedFilms, FeaturedFilm } from '../../utils/types/types';
interface Props {
	featuredFilms: any[];
}

const PosterGrid: React.FC<Props> = ({ featuredFilms }) => {
	return (
		<div className='poster-grid'>
			<h3 className='heading'>Other Films</h3>
			<div className='grid-container'>
				{featuredFilms.map((featuredFilm: any, index: number) => {
					const poster =
						'https:' +
						featuredFilm.fields.posterImg.fields.file.url;
					return (
						<PosterItem
							key={index}
							poster={poster}
							title={featuredFilm.fields.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PosterGrid;
