import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'; // Ensure this matches the actual file name
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import History from './pages/History';
import './App.css';

function App() {
    return (
        <Router>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/deposit">Deposit</Link>
                <Link to="/withdraw">Withdraw</Link>
                <Link to="/history">History</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;
