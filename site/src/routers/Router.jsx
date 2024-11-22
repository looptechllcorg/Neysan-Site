import ClientRoot from "../pages/client/ClientRoot";
import Contact from "../pages/client/contact/Contact";
import Home from "../pages/client/home/Home";



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
            }


        ]
    },
    {
        future: {
          v7_relativeSplatPath: true,
        },
      }
    // {
    //     path: "*",
    //     element: <ErrorPage />
    // },
]