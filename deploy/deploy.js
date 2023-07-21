const { INITIAL_SUPPLY, developmentChains } = require("../helper-hardhat.config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ deployments, getNamedAccounts }) => {
	const { deployer } = await getNamedAccounts();
	const { deploy, log } = deployments;

	const staphy = await deploy("Staphy", {
		from: deployer,
		args: [INITIAL_SUPPLY],
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	});
	console.log("Staphy Deployed!");

	if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
		await verify(ourToken.address, [INITIAL_SUPPLY]);
		console.log("Verified!");
	}
};
module.exports.tags = ["all", "token"];
