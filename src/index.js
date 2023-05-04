import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom'; 
import "typeface-quicksand";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
