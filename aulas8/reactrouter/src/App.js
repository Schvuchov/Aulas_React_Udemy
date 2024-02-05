import './App.css';

// 1- congig react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Product from './pages/Product.js'
import Info from './pages/Info.js'
import NotFound from './pages/NotFound.js';
import Search from './pages/Search.js';

//components
import Navbar from './components/Navbar.js';
import SearchForm from './components/SearchForm.js';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        {/*9 - search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* 4- rota dinâmica */}
          <Route path="/products/:id" element={<Product/>} />
          {/* 6- nested route */}
          <Route path="/products/:id/info" element={<Info/>} />
          {/* 9 -Search */}
          <Route path="/search" element={<Search/>} />
          {/* 10 -redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
