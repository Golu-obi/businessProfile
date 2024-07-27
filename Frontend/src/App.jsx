import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Ppage from './products/Ppage';
import Signup from './Components/Signup';

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Ppage />} />
      <Route path='/signup' element={<Signup/>} />
      

    </Routes>
    </div>
  );
}

export default App;

