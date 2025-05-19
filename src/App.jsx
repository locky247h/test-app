import React from 'react'
import { Detail } from './pages/Detail'
import { Header } from './components/Header'
import { Home } from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App