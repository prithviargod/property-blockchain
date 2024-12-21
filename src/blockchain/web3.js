import Web3 from "web3";

let web3;

// Check if MetaMask is installed
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  // Request account access
  window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
    console.error("User denied account access", err);
  });
} else {
  alert("MetaMask not detected. Please install MetaMask!");
}

export default web3;
