/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'

import {
  // eslint-disable-next-line no-unused-vars
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routers/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
