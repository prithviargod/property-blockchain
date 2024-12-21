import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Property Blockchain
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/instructions">Instructions</Button>
        <Button color="inherit" href="/property">Property Details</Button>
        <Button color="inherit" href="/blockchain">Blockchain</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
