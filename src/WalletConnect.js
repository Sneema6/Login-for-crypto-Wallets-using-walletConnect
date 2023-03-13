import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Initialize web3modal
const web3Modal = new Web3Modal({
  cacheProvider: false,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "YOUR_INFURA_PROJECT_ID",
      },
    },
  },
});

// Trigger the connection request
const connectWallet = async () => {
  const provider = await web3Modal.connect();
  const web3 = new Web3(provider);

  // Retrieve the user's account information
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
};

// Example usage: Connect button click
const connectButton = document.querySelector("#connect-button");
connectButton.addEventListener("click", connectWallet);
