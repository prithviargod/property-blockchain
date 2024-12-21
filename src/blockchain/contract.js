import web3 from "./web3";
import contractABI from "./contractABI.json"; // ABI copied from Truffle build output

const contractAddress = "0x50FE795Fd0349c071004Dd533838260aA5fdABb3"; // Replace with your contract address

const propertyContract = new web3.eth.Contract(contractABI, contractAddress);

export default propertyContract;

// Transfer ownership function
export const transferOwnership = async (propertyId, newOwnerAddress) => {
  try {
    const accounts = await web3.eth.getAccounts();

    await propertyContract.methods
      .transferOwnership(propertyId, newOwnerAddress)
      .send({ from: accounts[0] })
      .on("transactionHash", (hash) => {
        console.log("Transaction Hash:", hash);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log("Transaction Confirmed:", receipt);
      });

    return { success: true };
  } catch (error) {
    console.error("Transaction confirmed", error);
    return { success: false, error };
  }
};

