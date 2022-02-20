import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import type { NextPage } from 'next';
import Head from 'next/head';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE as string,
		accessToken: process.env.CONTENTFUL_API_TOKEN as string,
	});

	const res: any = await client.getEntry('1HbbFIMz88vYDNxmcwsML3');

	return { props: { ...res } };
}

const About: NextPage = (res: any) => {
	let { section } = res.fields;
	return (
		<div className='about'>
			<Head>
				<title>Fleming Pictues | About</title>
			</Head>
			<h1>Our Story</h1>
			<div>{documentToReactComponents(section)}</div>
		</div>
	);
};

export default About;
