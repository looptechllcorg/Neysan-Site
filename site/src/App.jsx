import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ROUTES } from './routers/Router'

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
      <RouterProvider  router={routes} />
    </>
  )
}

export default App
