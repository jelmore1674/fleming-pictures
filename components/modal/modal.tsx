import React from 'react';
import ReactPlayer from 'react-player';

export default function Modal({ film, closeModal }: any) {
	return (
		<div className='portal' onClick={closeModal}>
			<div className='modal'>
				<div className='modal-container'>
					<h3 className='movie-title'>{film.title}</h3>
					<div className='video-container'>
						<div>
							<ReactPlayer
								controls
								url={film.trailer}
								width='100%'
								height='100%'
							/>
						</div>
					</div>
					<h3>Sypnosis</h3>
					<p>{film.sypnosis}</p>
				</div>
				<i className='fas fa-times icon' onClick={closeModal}></i>
			</div>
		</div>
	);
}
