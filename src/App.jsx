import { useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Custom from './Custom';
import Product from './Product';
import Cate from './cate';

function App() {
  return (    
    <div>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Customer' element={<Custom />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Cat' element={<Cate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
