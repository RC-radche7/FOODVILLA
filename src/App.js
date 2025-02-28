import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import {createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import GroceryComponent from "./components/Grocery"; // Renamed to avoid conflict
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
import EmptyCart from "./components/EmptyCart";
import Message from "./components/Message";
import Payment from './components/Payment'
import PaymentDetails from "./components/PaymentDetails";

// Removed the redundant declaration of Grocery

const AppLayout = () => {
  return ( 
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },{
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Shimmer />}> <GroceryComponent /></Suspense>, // Updated to use GroceryComponent
      },

      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/emptyCart',
        element: <EmptyCart />,
      },
      {
        path: '/message',
        element: <Message/>,
      },
      {
        path: '/paymentDetails',
        element: <PaymentDetails/>,
      },
      {
        path: '/payment',
        element: <Payment/>,
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={appRouter} />);
