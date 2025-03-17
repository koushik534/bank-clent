import React, { useState } from 'react';
import axios from 'axios';
export default function Deposit() {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const deposit = async () => {
        await axios.post('http://localhost:5000/deposit', { email, amount });
        alert('Amount Deposited');
    };
    return (
        <div>
            <h1>Deposit</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder="Amount" onChange={(e) => setAmount(Number(e.target.value))} />
            <button onClick={deposit}>Deposit</button>
        </div>
    );
}