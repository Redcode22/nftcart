import { ethers } from "ethers";

export const connectWallet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  return accounts[0];
};

export const getCurrentWalletConnected = async () => {

};

export const updateMessage = async (address: string, message: string) => {

};

export const getWalletBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  const balance = await provider.getBalance(accounts[0]);
  const balanceInEther = ethers.utils.formatEther(balance);
  return {
    balance: balanceInEther,
    address: accounts[0]
  }
}

export const getCurrentBlock = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const block = await provider.getBlockNumber()
  return block;
}

// export const getContractDetails = async () {
//   const provider = new ethers.providers.Web3Provider(window.ethereum)
//   const daiContract = new ethers.Contract('0x6b175474e89094c44da98b954eedeac495271d0f', ProductOwnership_ABI, provider);
// }