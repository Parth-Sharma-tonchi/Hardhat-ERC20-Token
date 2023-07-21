const { assert, expect } = require("chai");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY } = require("../../helper-hardhat.config");

!developmentChains.includes(network.name)
	? describe.skip
	: describe("Staphy Unit Test", function () {
			let Staphy, deployer, user1;

			beforeEach(async function () {
				const accounts = await getNamedAccounts();
				deployer = accounts.deployer;
				user1 = accounts.user1;

				await deployments.fixture("all");
				Staphy = await ethers.getContract("Staphy", deployer);
			});

			describe("constructor", function () {
				it("should have the same token name and symbol", async function () {
					const tokenName = await Staphy.name();
					const tokenSymbol = await Staphy.symbol();

					assert.equal(tokenName.toString(), "Staphy");
					assert.equal(tokenSymbol.toString(), "st");
				});
				it("should have some balance to owner", async () => {
					const deployerBalance = await Staphy.balanceOf(deployer);
					assert(deployerBalance);
				});
				it("should have initial supply as balance", async () => {
					const deployerBalance = await Staphy.balanceOf(deployer);
					assert.equal(deployerBalance.toString(), INITIAL_SUPPLY);
				});
			});
	  });
