import React, { useState } from 'react';
import axios from 'axios';
export default function Withdraw() {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const withdraw = async () => {
        await axios.post('http://localhost:5000/withdraw', { email, amount });
        alert('Amount Withdrawn');
    };
    return (
        <div>
            <h1>Withdraw</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder="Amount" onChange={(e) => setAmount(Number(e.target.value))} />
            <button onClick={withdraw}>Withdraw</button>
        </div>
    );
}