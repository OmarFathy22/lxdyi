import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Header from "./components/Header/Header";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};
const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <div >
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
