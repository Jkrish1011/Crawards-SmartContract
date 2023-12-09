require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/SsF4IfMulZTQTt-yuLWC38vPTZVf4m48",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.19",
};
