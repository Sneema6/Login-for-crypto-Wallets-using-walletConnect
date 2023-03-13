import React, { useEffect, useState } from "react";
const getInstalledWallets = async () => {
  const result = [];
  if (window.ethereum) {
    result.push({
      name: "MetaMask",
      logo: "metamask-logo.png",
      installed: true,
    });
  }
  if (typeof window.BinanceChain !== "undefined") {
    result.push({
      name: "Binance Chain Wallet",
      logo: "binancechain-logo.png",
      installed: true,
    });
  }
  if (typeof window.web3 !== "undefined") {
    result.push({
      name: "Legacy Web3 Wallet",
      logo: "legacy-web3-logo.png",
      installed: true,
    });
  }
  return result;
};

// const WalletList = () => {
//   const [installedWallets, setInstalledWallets] = useState([]);

//   useEffect(() => {
//     const fetchInstalledWallets = async () => {
//       const wallets = await getInstalledWallets();
//       setInstalledWallets(wallets);
//     };
//     fetchInstalledWallets();
//   }, []);

//   return (
//     <div>
//       {installedWallets.map((wallet) => (
//         <div key={wallet.name}>
//           <img src={wallet.logo} alt={wallet.name} />
//           <p>{wallet.name}</p>
//           <p>{wallet.installed ? "Installed" : "Not installed"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

//   const getInstalledExtensions = () => {
//     return new Promise((resolve, reject) => {
//       browser.management.getAll((allExtensions) => {
//         const installedExtensions = allExtensions.filter(
//           (ext) =>
//             ext.type === "extension" &&
//             ext.enabled &&
//             ext.permissions.includes("wallets")
//         );
//         resolve(installedExtensions);
//       });
//     });
//   };

//   getInstalledExtensions().then((installedExtensions) => {
//     console.log(installedExtensions);
//   });
// };

// export default WalletList;
