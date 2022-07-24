import { ethers } from "hardhat";

async function main() {

  const Ownership = await ethers.getContractFactory("Ownership");
  const ownership = await Ownership.deploy();

  await ownership.deployed();

  console.log("My Ownership NFT deployed to:", ownership.address);

  const ProductOwnership = await ethers.getContractFactory("ProductOwnership");
  const productOwnership = await ProductOwnership.deploy();

  await productOwnership.deployed();

  console.log("My Product Ownership NFT deployed to:", productOwnership.address);

  const Warranty = await ethers.getContractFactory("Warranty");
  const warranty = await Warranty.deploy();

  await warranty.deployed();

  console.log("My Warranty NFT deployed to:", warranty.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
