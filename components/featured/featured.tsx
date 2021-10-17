import React, { MouseEventHandler } from 'react';
import { FeaturedFilm, FeaturedFilms } from '../../utils/types/types';
const delay = 8000;

export default function FeaturedSection({ featuredFilms, openModal }: any) {
	const [index, setIndex] = React.useState(0);
	const [width, setWidth] = React.useState(769);

	interface TimeoutRef {
		current: any;
	}

	const breakpoint = 768;
	const timeoutRef: TimeoutRef = React.useRef(null);

	React.useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, []);
	React.useEffect(() => {
		function resetTimeout() {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		}
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
	}, [featuredFilms.length, index]);

	function handleChangeSlideshowItem(index: number, click?: string): void {
		if (!click) {
			setIndex(index);
		} else if (click === 'prev') {
			if (index < 0) {
				setIndex(featuredFilms.length - 1);
			} else {
				setIndex(index);
			}
		} else if (click === 'forward') {
			if (index > featuredFilms.length - 1) {
				setIndex(0);
			} else {
				setIndex(index);
			}
		}
	}

	return (
		<div className='featured-slideshow' data-testid='featured-section'>
			<div
				className='featured-section'
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
				{featuredFilms.map(
					(
						featuredFilm: FeaturedFilm,
						index: React.Key | null | undefined
					) => {
						return (
							<div
								key={index}
								data-testid={`img-container${index}`}
								className='featured-slider'>
								<div
									className='featured-image'
									style={{
										backgroundImage: ` url(${
											width < breakpoint
												? featuredFilm.posterImg
												: featuredFilm.featuredImg
										})`,
									}}>
									<button
										className='modal-button'
										onClick={() => openModal(featuredFilm)}>
										More Info
									</button>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div className='slideshowDots'>
				{featuredFilms.map((_: any, idx: number) => (
					<div
						key={idx}
						className={`slideshowDot${
							index === idx ? ' active' : ''
						}`}
						onClick={() => handleChangeSlideshowItem(idx)}></div>
				))}
			</div>
			<div
				className='icon icon-left'
				onClick={() => handleChangeSlideshowItem(index - 1, 'prev')}>
				<i className='fas fa-chevron-left'></i>
			</div>
			<div
				className='icon icon-right'
				onClick={() => handleChangeSlideshowItem(index + 1, 'forward')}>
				<i className='fas fa-chevron-right'></i>
			</div>
		</div>
	);
}
