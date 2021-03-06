import React, { Fragment, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';
import { NextPage } from 'next';

interface Props {
	children: ReactElement & ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<title>Fleming Pictures</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#141414' />
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
					integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
					crossOrigin='anonymous'></link>
			</Head>
			<Nav />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
