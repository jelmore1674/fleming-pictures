import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: ReactElement;
}

const Portal: React.FC<Props> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector('#myportal')!)
		: null;
};

export default Portal;
