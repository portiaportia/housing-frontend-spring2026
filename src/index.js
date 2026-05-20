import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Organization from './pages/Organization';
import { ClerkProvider } from '@clerk/clerk-react'


const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing REACT_APP_CLERK_PUBLISHABLE_KEY");
}
/*
const basename =
  process.env.NODE_ENV === "production"
    ? "/housing-frontend-spring2026"
    : "/";
*/
const basename = "/housing-frontend-spring2026";

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl="/housing-frontend-spring2026/">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />  
            <Route path="listings" element={<Listings />} />
            <Route path="contact" element={<Contact />} />   
            <Route path="schedule" element={<Schedule />} />
            <Route path="organization" element={<Organization />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

