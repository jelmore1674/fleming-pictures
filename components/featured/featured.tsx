import React from 'react';

const delay = 8000;

export default function FeaturedSection({ featuredFilms }: any) {
	const [index, setIndex] = React.useState(0);
	const timeoutRef: any = React.useRef(null);
	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === featuredFilms.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);
	return (
		<div className='featured-slideshow'>
			<div
				className='featured-section'
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
				{featuredFilms.map(
					(
						featuredFilm: { featuredImg: any },
						index: React.Key | null | undefined
					) => {
						return (
							<div key={index} className='featured-slider'>
								<div
									className='featured-image'
									style={{
										backgroundImage: ` url(${featuredFilm.featuredImg})`,
									}}>
									<i className='fas fa-chevron-left'></i>
									<button className='modal-button'>
										More Info{' '}
									</button>
								</div>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
}
