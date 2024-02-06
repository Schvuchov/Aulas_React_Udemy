import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Products from './pages/Products.js'
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
