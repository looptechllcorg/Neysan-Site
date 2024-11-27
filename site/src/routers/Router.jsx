import ClientRoot from "../pages/client/ClientRoot";
import Contact from "../pages/client/contact/Contact";
import Home from "../pages/client/home/Home";
import Photos from "../pages/client/photos/Photos";
import Videos from "../pages/client/videos/Videos";
import Product from "../pages/client/product/Product";



export const ROUTES = [
    {
        path: "/",
        element: <ClientRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "photos",
                element: <Photos />
            },
            {
                path: "videos",
                element: <Videos />
            },


        ]
    },
    {
        // future: {
        //   v7_relativeSplatPath: true,
        // },
      }
    // {
    //     path: "*",
    //     element: <ErrorPage />
    // },
]