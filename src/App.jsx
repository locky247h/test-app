import React from 'react'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { posts } from './data/posts'

function App() {
  return (
    <div>
      <Header />
      <Home src={posts} />
    </div>
  );
};

export default App;