// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createClient, WagmiConfig } from "@wagmi/core";
// import { arbitrum, mainnet, polygon } from "@wagmi/chains";
// import "./App.css";

// function App() {
//   const chains = [arbitrum, mainnet, polygon];
//   const projectId = "462088e92ad442f0c5c4522f7117abaa";

//   const { provider } = configureChains(chains, [
//     walletConnectProvider({ projectId: projectId }),
//   ]);

//   const wagmiClient = createClient({
//     autoConnect: true,
//     connectors: modalConnectors({
//       projectId,
//       version: "2",
//       appName: "web3Modal",
//       chains,
//     }),
//     provider,
//   });

//   const ethereumClient = new EthereumClient(wagmiClient, chains);
//   return (
//     <div className="App">
//       <WagmiConfig client={wagmiClient}>
//         <h1>Web3Modal Demo</h1>
//         {/* <HomePage /> */}
//       </WagmiConfig>

//       <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
//     </div>
//   );
// }
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import { useEffect } from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import {
  InjectedConnector,
  // WalletConnectConnector,
} from "wagmi/connectors/injected";

const chains = [arbitrum, mainnet, polygon];
const projectId = "462088e92ad442f0c5c4522f7117abaa";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const getWalletExtensions = async () => {
  const connectors = await Web3Modal.getConnectors();
  debugger;
  const walletExtensions = connectors.filter((connector) => {
    return (
      connector instanceof InjectedConnector
      // connector instanceof WalletConnectConnector
    );
  });
  return walletExtensions;
};

function App() {
  getWalletExtensions();

  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <h1>Web3Modal Demo</h1>
        <Web3Button />
        {/* <HomePage /> */}
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}
export default App;
