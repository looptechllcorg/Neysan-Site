import ClientRoot from "../pages/client/ClientRoot";
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
            // {
            //     path: "login",
            //     element: <ClientLogin />
            // }


        ]
    },
    // {
    //     path: "*",
    //     element: <ErrorPage />
    // },
]