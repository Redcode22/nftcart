const { expect } = require('chai')
const hre = require("hardhat");

describe("ProductOwnership", () => {
  it("Should mint and transfer a NFT to recipient", async () => {
    const Ownership = await hre.ethers.getContractFactory("Ownership")
    const ownership = await Ownership.deploy()
    await ownership.deployed();

    const recipient = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
    const metadataURI = "cid/shoes.png";
    let balance = await ownership.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newMintedToken = await ownership.payToMint(recipient, metadataURI, { value: hre.ethers.utils.parseEther("0.01") });
    await newMintedToken.wait();
    balance = await ownership.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await ownership.isContentOwned(metadataURI)).to.equal(true);
  })
})