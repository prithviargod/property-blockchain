import React, { useState } from "react";

function PropertyForm() {
  const [property, setProperty] = useState({ address: "", owner: "", price: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Property submitted:", property);

    // Add blockchain interaction code here (e.g., using web3 or ethers.js)
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={property.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Owner:
          <input
            type="text"
            name="owner"
            value={property.owner}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PropertyForm;
