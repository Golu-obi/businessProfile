import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Ppage from './products/Ppage';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Logout from './Components/Logout'; // Import the Logout component
import { Toaster } from 'react-hot-toast';
import About from './Components/About';

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Ppage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
