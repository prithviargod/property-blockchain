import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    owner: "",
    location: "",
    area: "",
    price: "",
    subRegistrarOffice: "",
    thumbprint: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPropertyDetails((prev) => ({
        ...prev,
        thumbprint: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing properties from local storage
    const existingProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    // Add new property to the list
    const updatedProperties = [...existingProperties, propertyDetails];
    localStorage.setItem("properties", JSON.stringify(updatedProperties));

    // Redirect to property list page
    navigate("/property-list");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add Property Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Existing Fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Property Title"
              name="title"
              value={propertyDetails.title}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Owner Name"
              name="owner"
              value={propertyDetails.owner}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Property Location"
              name="location"
              value={propertyDetails.location}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Area (sq ft)"
              name="area"
              value={propertyDetails.area}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Price ($)"
              name="price"
              value={propertyDetails.price}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Latitude"
              name="latitude"
              value={propertyDetails.latitude}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Longitude"
              name="longitude"
              value={propertyDetails.longitude}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* New Fields */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sub-Registrar Office"
              name="subRegistrarOffice"
              value={propertyDetails.subRegistrarOffice}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
          <Typography variant="subtitle1">Upload Thumbprint</Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginTop: "16px" }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit Property
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddProperty;
