import type { NextPage } from 'next';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Connect = () => {
	return (
		<div className='twitter-container'>
			<h3>Keep up to date with our Socials</h3>
			<TwitterTimelineEmbed
				sourceType='profile'
				screenName='flemingpictures'
				theme='dark'
				options={{ height: '700' }}
			/>
		</div>
	);
};

export default Connect;
