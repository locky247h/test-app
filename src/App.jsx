import React from 'react'
import { Detail } from './pages/Detail'
import { Header } from './components/Header'
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;