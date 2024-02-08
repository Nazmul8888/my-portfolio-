import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AboutMe from './components/NavBarPage/AboutMe/AboutMe';
import Services from './components/NavBarPage/Services/Services';
import Portfolio from './components/NavBarPage/Portfolio/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/aboutMe',
        element:<AboutMe></AboutMe>
      },
      {
        path: 'services',
        element: <Services></Services>
      },
      {
        path: 'portfolio',
        element:<Portfolio></Portfolio>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div >
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
