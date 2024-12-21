import React, { useState } from "react";
import { transferOwnership } from "../blockchain/contract";
import PropertyImage from "../assets/images/owner.avif";

const TransferOwnership = () => {
  const [propertyId, setPropertyId] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [status, setStatus] = useState("");

  const handleTransfer = async () => {
    setStatus("Pending...");
    const result = await transferOwnership(propertyId, newOwner);
    if (result.success) {
      setStatus("Transfer Successful!");
    } else {
      setStatus("Transaction confirmed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: "50%",
        left: "10%",
        transform: "translateY(-50%)",
        maxWidth: "90%", // Updated to accommodate both sections
        padding: "20px",
        paddingRight: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        marginRight: "10px",
      }}
    >
      {/* Transfer Form */}
      <div
        style={{
          flex: "1",
          paddingRight: "40px",
          marginRight: "10px",
        }}
      >
        <h2>Transfer Property Ownership</h2>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Property ID"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="New Owner Address"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          onClick={handleTransfer}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Transfer
        </button>
        <p style={{ marginTop: "15px" }}>{status}</p>
      </div>

      {/* Image Section */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "50%",
        }}
      >
        <img
          src={PropertyImage}
          alt="Owner Illustration"
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default TransferOwnership;
