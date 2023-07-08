import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Cards';
import data from './Api';
import Navbar from './Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App api={data} />
  </React.StrictMode>
);


