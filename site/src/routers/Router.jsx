import ClientRoot from "../pages/client/ClientRoot";
import Contact from "../pages/client/contact/Contact";
import Home from "../pages/client/home/Home";
import Photos from "../pages/client/photos/Photos";
import Media from "../pages/client/media/Media";
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
                path: "media",
                element: <Media />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "photos",
                element: <Photos />
            }


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