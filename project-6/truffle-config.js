const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "e1cbc6bbb43241ae904b925c1d9c3f1e";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "0.4.25"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    },
  }
};
