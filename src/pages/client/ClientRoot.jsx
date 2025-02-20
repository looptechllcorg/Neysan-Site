import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/ScrolToTop/ScrolToTop';
import Bar from '../../assets/Gif/Bar';
const ClientRoot = () => {
	const location = useLocation();
	if (location.pathname === '/') {
		window.disableScroll();
	} else window.enableScroll();

  const [loading, setLoading] = useState(false);
  const loadingTime = location.pathname === "/" ? 2000 : 800;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div 
        className="loadingContainer" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          width: '100vw',
          fontSize: '24px',
          zIndex: '9999',
          background: 'white'
        }}
      >
        <Bar/>
      </div>
    );
  }
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
