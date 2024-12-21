import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function AuditTrail() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Replace this with a real API call to fetch transaction data
    const fetchTransactions = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/audit-trail"); // Backend URL
          const data = await response.json();
          setTransactions(data);
        } catch (error) {
          console.error("Error fetching audit trail:", error);
        }
      };
      

    fetchTransactions();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Transaction Audit Trail
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Value ($)</TableCell>
              <TableCell>Property ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.transactionId}</TableCell>
                <TableCell>
                  {new Date(transaction.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{transaction.from}</TableCell>
                <TableCell>{transaction.to}</TableCell>
                <TableCell>{transaction.value}</TableCell>
                <TableCell>{transaction.propertyId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AuditTrail;
