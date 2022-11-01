import React from 'react'
import ReactDOM from 'react-dom/client'
import First from './First'
import App from './App'
import Git from './Git'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/count",
    element: <App />,
  },
  {
    path: "/git",
    element: <Git />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
