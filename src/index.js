import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Footer from './components/Footer';




const AppLayout = () => {
  return (
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    //   {
    //     path: "/about",
    //     element: (
    //       <Suspense fallback={<h1>Loading....</h1>}>
    //         <About />
    //       </Suspense>
    //     ),
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "/grocery",
    //     element: (
    //       <Suspense fallback={<h1>Loading....</h1>}>
    //         <Grocery />
    //       </Suspense>
    //     ),
    //   },
    //   {
    //     path: "/restaurants/:resId",
    //     element: <RestaurantMenu />,
    //   },
    //   {
    //     path: "/cart",
    //     element: <Cart />,
    //   },
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
