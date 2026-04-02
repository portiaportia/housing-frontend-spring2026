import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import HouseDetails from "./components/HouseDetails";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />  
          <Route path="listings" element={<Listings />} />
          <Route path="listings/:id" element={<HouseDetails />} />
          <Route path="contact" element={<Contact />} />   
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

