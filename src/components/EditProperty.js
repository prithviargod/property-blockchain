import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

function EditProperty() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    setPropertyDetails(properties[index]);
  }, [index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties[index] = propertyDetails;
    localStorage.setItem("properties", JSON.stringify(properties));
    navigate("/property-list");
  };

  if (!propertyDetails) return null;

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Edit Property Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EditProperty;
