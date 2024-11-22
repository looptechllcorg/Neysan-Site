import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ROUTES } from './routers/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
      <RouterProvider  router={routes}  />
    </>
  )
}

export default App
