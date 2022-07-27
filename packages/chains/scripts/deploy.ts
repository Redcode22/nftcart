import { ethers } from "hardhat";

async function main() {

  const NFTWarranty = await ethers.getContractFactory("NFTWarranty");
  const nftWarranty = await NFTWarranty.deploy();

  await nftWarranty.deployed();

  console.log("My NFT Warranty contract deployed to:", nftWarranty.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
