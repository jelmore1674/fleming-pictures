import React, { MouseEventHandler } from 'react';
import { FeaturedFilm } from '../../utils/types/types';

interface Props {
	featuredFilms: any;
	openModal: (film: FeaturedFilm) => void;
}

const delay = 8000;

const FeaturedSection: React.FC<Props> = ({ featuredFilms, openModal }) => {
	const [index, setIndex] = React.useState(0);
	const [width, setWidth] = React.useState(900);

	interface TimeoutRef {
		current: number | null;
	}

	const breakpoint = 768;
	const timeoutRef: TimeoutRef = React.useRef(null);

	React.useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	React.useEffect(() => {
		let isMounted = true;

		window.addEventListener('resize', () => {
			if (isMounted) {
				setWidth(window.innerWidth);
			}
		});

		return () => {
			isMounted = false;
		};
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
		) as unknown as number;

		return () => {
			resetTimeout();
		};
	}, [featuredFilms.length, index]);

	function handleChangeSlideshowItem(index: number, click?: string): void {
		if (click === 'prev' && index < 0) {
			setIndex(featuredFilms.length - 1);
		} else if (click === 'forward' && index > featuredFilms.length - 1) {
			setIndex(0);
		} else {
			setIndex(index);
		}
	}

	return (
		<div className='featured-slideshow' data-testid='featured-section'>
			<div
				className='featured-section'
				data-testid={`feature-img-${index}`}
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
				{featuredFilms.map(
					(
						featuredFilm: any,
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
												? 'https:' +
												  featuredFilm.fields.posterImg
														.fields.file.url
												: 'https:' +
												  featuredFilm.fields
														.featuredImg.fields.file
														.url
										})`,
									}}>
									<button
										id={`btn-${index}`}
										data-testid={`btn-${index}`}
										role='button'
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
						data-testid={`slider-status-${idx}`}
						className={`slideshowDot${
							index === idx ? ' active' : ''
						}`}
						onClick={() => handleChangeSlideshowItem(idx)}></div>
				))}
			</div>
			<div
				className='icon icon-left'
				data-testid='cursor-left'
				onClick={() => handleChangeSlideshowItem(index - 1, 'prev')}>
				<i className='fas fa-chevron-left'></i>
			</div>
			<div
				className='icon icon-right'
				data-testid='cursor-right'
				onClick={() => handleChangeSlideshowItem(index + 1, 'forward')}>
				<i className='fas fa-chevron-right'></i>
			</div>
		</div>
	);
};

export default FeaturedSection;
