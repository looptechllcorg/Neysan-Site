import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/ScrolToTop/ScrolToTop';

const ClientRoot = () => {
	const location = useLocation();
	if (location.pathname === '/') {
		window.disableScroll();
	} else window.enableScroll();
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default ClientRoot;
