import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Blockchain-Driven Framework for Secure Land Ownership
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Ensuring transparency, trust, and immutability in property systems.
      </Typography>

      <Grid container spacing={3}>
        {/* Left Side: Embedded Map */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                GIS Mapping Integration
              </Typography>
              <iframe
                src="https://www.scribblemaps.com/maps/view/Maple-Map/fhrm4HiomD"
                title="Map Integration"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side: Features */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {/* Secure Property Records Section */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Secure Property Records</Typography>
                  <Typography variant="body2">
                    Digitize property records on a blockchain ledger to prevent tampering and ensure secure ownership.
                  </Typography>
                  <Button
                    href="/add-property"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Add Property
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Automated Title Transfers Section */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Automated Title Transfers</Typography>
                  <Typography variant="body2">
                    Use blockchain-based smart contracts to automate property sales and inheritance.
                  </Typography>
                  <Button
                    href="/transfer"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Start Transfer
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Transaction Audit Trail Section */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Transaction Audit Trail</Typography>
                  <Typography variant="body2">
                    Every property transaction is logged immutably, ensuring accountability and transparency.
                  </Typography>
                  <Button
                    href="/audit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    View Audit Trail
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
