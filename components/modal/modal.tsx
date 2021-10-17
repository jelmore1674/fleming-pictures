import React from 'react';
import ReactPlayer from 'react-player';

export default function Modal({ film }: any) {
	return (
		<div>
			{film.trailer}
			<div className='video-container'>
				<ReactPlayer
					controls
					url='https://www.twitch.tv/videos/1178824062'
				/>
			</div>
		</div>
	);
}
