import React, { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout';
import './Styles/app.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App
// ReactDOM.render(<App />, document.getElementById("root"))
