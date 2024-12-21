import React, { useEffect, useState } from "react";

function Blockchain() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch blockchain transactions (replace with real blockchain interaction)
    const fetchTransactions = async () => {
      const dummyData = [
        { id: 1, from: "0x123", to: "0xabc", amount: 100, property: "House 1" },
        { id: 2, from: "0x456", to: "0xdef", amount: 200, property: "House 2" },
      ];
      setTransactions(dummyData);
    };

    fetchTransactions();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blockchain Transactions</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Property</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{tx.amount}</td>
              <td>{tx.property}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blockchain;
