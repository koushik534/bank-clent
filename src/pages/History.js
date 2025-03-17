import React, { useState } from 'react';
import axios from 'axios';

export default function History() {
    const [email, setEmail] = useState('');
    const [totalBalance, setTotalBalance] = useState(0);

    const fetchHistory = async () => {
        const res = await axios.get(`http://localhost:5000/history/${email}`);
        const transactions = res.data.transactions;

        // Calculate total balance
        const balance = transactions.reduce((acc, txn) => {
            return txn.type === 'deposit' ? acc + txn.amount : acc - txn.amount;
        }, 0);

        setTotalBalance(balance);
    };

    return (
        <div>
            <h1>Transaction History</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={fetchHistory}>View Balance</button>
            <h2>Total Balance: {totalBalance}</h2>
        </div>
    );
}
