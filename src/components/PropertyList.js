import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Retrieve properties from local storage
    const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(storedProperties);
  }, []);

  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
    setProperties(updatedProperties);
  };

  const handleEdit = (index) => {
    navigate(`/edit-property/${index}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Property List
      </Typography>
      <Grid container spacing={3}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{property.title}</Typography>
                <Typography variant="body2">Owner: {property.owner}</Typography>
                <Typography variant="body2">Location: {property.location}</Typography>
                <Typography variant="body2">Area: {property.area} sq ft</Typography>
                <Typography variant="body2">Price: ${property.price}</Typography>
                <Typography variant="body2">Latitude{property.latitude}</Typography>
                <Typography variant="body2">Longitude{property.longitude}</Typography>
                {/* Display Sub-Registrar Office */}
                {property.subRegistrarOffice && (
                  <Typography variant="body2">
                    Sub-Registrar Office: {property.subRegistrarOffice}
                  </Typography>
                )}
                {/* Display Thumbprint */}
                {property.thumbprint && (
                  <Typography variant="body2">
                    Thumbprint:{" "}
                    <a
                      href={property.thumbprint}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Thumbprint
                    </a>
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "5px" }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PropertyList;
