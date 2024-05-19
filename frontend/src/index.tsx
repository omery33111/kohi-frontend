import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './features/base/Homepage';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>


      <Routes>

        <Route path="/" element={<App />}>

          <Route index element={<Homepage />} />

        </Route>

      </Routes>


    </BrowserRouter>
  </React.StrictMode>
);
