import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Markets from './pages/Markets';
import MarketDetails from './pages/MarketDetails';
import Portfolio from './pages/Portfolio';
import AIArena from './pages/AIArena';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/market/:id" element={<MarketDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ai-arena" element={<AIArena />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
