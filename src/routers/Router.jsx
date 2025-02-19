import ClientRoot from "../pages/client/ClientRoot";
import Contact from "../pages/client/contact/Contact";
import Home from "../pages/client/home/Home";
import Photos from "../pages/client/photos/Photos";
import Videos from "../pages/client/videos/Videos";
import Product from "../pages/client/product/Product";
import OurCompany from "../pages/client/ourCompany/OurCompany";
import PointOfSale from "../pages/client/pointOfSale/PointOfSale";
import DetailPage from "../pages/client/detailPage/DetailPage";
import SearchResult from "../pages/client/search/SearchResult";
import Error from "../pages/client/error/Error";

export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "our-company",
        element: <OurCompany />,
      },
      {
        path: "point-of-sale",
        element: <PointOfSale />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "/product/:slug",
        element: <DetailPage />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "search",
        element: <SearchResult />,
      },
     
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
  // {
  //     path: "*",
  //     element: <ErrorPage />
  // },
];
