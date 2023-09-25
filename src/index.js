import React from 'react';
import MainPage from './Components/MainPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import ErrorPage from './Components/ErrorPage';
import Form from './Components/signUp';
import Cal from './Components/calculator';
import Increment from './Components/increment';
import HOCs from './newComponent/HOCs';

import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement : <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/form",
    element: <Form/>,
  },
  {
    path: "/cal",
    element: <Cal/>,
  },
  {
    path: "/increment",
    element: <Increment/>,
  },
  {
    path: "/HOCs",
    element: <HOCs/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// ReactDOM.render(document.getElementById('root'));