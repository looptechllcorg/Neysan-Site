import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ROUTES } from './routers/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './components/ScrolToTop/ScrolToTop';
const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
      
      <RouterProvider  router={routes}  />
       
    </>
  )
}

export default App
