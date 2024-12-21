import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";
import Blockchain from "./components/Blockchain";
import EditProperty from "./components/EditProperty";
import TransferOwnership from "./components/TransferOwnership";
import AuditTrail from "./components/auditTrail";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/property" element={<PropertyForm />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/property-list" element={<PropertyList />} />
        <Route path="/edit-property/:index" element={<EditProperty />} />
        <Route path="/transfer" element={<TransferOwnership />} />
        <Route path="/audit/" element={<AuditTrail />} />
      </Routes>
    </Router>
  );
}

export default App;
