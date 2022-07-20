import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Ownership = await ethers.getContractFactory("Ownership");
  const ownership = await Ownership.deploy();

  await ownership.deployed();

  const Warranty = await ethers.getContractFactory("Warranty");
  const warranty = await Warranty.deploy();

  await warranty.deployed();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
