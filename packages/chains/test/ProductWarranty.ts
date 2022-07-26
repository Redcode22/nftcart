import { assert } from "chai";
import { ethers } from "hardhat";

describe("ProductWarranty", () => {
  it("should generate a warranty", async () => {
    const warranty = await ethers.getContractFactory("Warranty");
    const warrantyInstance = await warranty.deploy();
    const warrantyAddress = warrantyInstance.address;
    assert.ok(warrantyAddress);
  }).timeout(10000);
})