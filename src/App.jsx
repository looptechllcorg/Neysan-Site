import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routers/Router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from './components/ScrolToTop/ScrolToTop';
import { DataContextProvider } from './Contexts/SearchContext';
import { LanguageProvider } from './Contexts/LanguageContext';
const routes = createBrowserRouter(ROUTES);

function App() {
	return (
		<>
		   <LanguageProvider>
			<DataContextProvider>
				<RouterProvider router={routes} />
			</DataContextProvider>
			</LanguageProvider>
		</>
	);
}

export default App;
