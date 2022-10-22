import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../../src/Util/Main'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Product from '../components/Product/Product'
import Signup from '../components/Signup/Signup'
import PrivetRoute from './PrivetRoute'

const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                  path: '/',
                  element: <Home />
                },
                {
                  path: '/signup',
                  element: <Signup />
                },
                {
                  path: '/login',
                  element: <Login />
                },
                {
                  path: '/product',
                  element: <PrivetRoute>
                    <Product />
                  </PrivetRoute>
                }
            ]
        }
    ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Route