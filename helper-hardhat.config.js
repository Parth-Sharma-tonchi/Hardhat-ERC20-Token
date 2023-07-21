const networkConfig = {
  11155111: {
    name: "sepolia",
  },
  31337: {
    name: "hardhat",
  },
};

const INITIAL_SUPPLY = "1000000000000000000000000";

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains, INITIAL_SUPPLY };
