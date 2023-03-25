import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { root } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={root}></RouterProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
)
