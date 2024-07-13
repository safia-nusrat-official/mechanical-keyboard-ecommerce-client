import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/home/Home.tsx";
import AboutUs from "../pages/AboutUs.tsx";
import ContactUs from "../pages/ContactUs.tsx";
import AllProducts from "../pages/products/AllProducts.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Cart from "../pages/cart/Cart.tsx";
import ProductDetails from "@/pages/products/ProductDetails.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
