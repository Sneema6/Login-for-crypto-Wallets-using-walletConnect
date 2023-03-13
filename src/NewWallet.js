import React, { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

function NewWallet() {
  const [account, setAccount] = useState(null);

  const web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: null,
          rpc: {
            1: "https://mainnet.infura.io/v3/YOUR_PROJECT_ID",
            4: "https://rinkeby.infura.io/v3/YOUR_PROJECT_ID",
          },
        },
      },
    },
  });

  // const web3Modal = new Web3Modal({
  //   cacheProvider: false,
  //   providerOptions: {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: {
  //         infuraId: null,
  //         rpc: {},
  //         bridge: "https://bridge.walletconnect.org",
  //         qrcode: true,
  //         pollingInterval: 12000,
  //         network: "mainnet",
  //         chainId: 1,
  //         clientId: "462088e92ad442f0c5c4522f7117abaa",
  //       },
  //     },
  //   },
  // });

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  return (
    <div>
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default NewWallet;
