import { ethers } from "ethers";
import { CONTRACT_ADDRESS, PINATA_API_KEY, PINATA_SECRET_API_KEY } from "./config";
import NFTWarranty_ABI from '../abis/NFTWarranty_ABI.json'
import { generateSerialId } from "./helpers";

export async function sendFileToIPFS(jsonData: any) {
  try {
    const raw = JSON.stringify({
      "pinataOptions": {
        "cidVersion": 1
      },
      "pinataMetadata": {
        "name": jsonData.name,
        "keyvalues": {
          ...jsonData
        }
      },
      "pinataContent": {
        "nft": "nftcart"
      }
    });
    const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers: {
        'pinata_api_key': `${PINATA_API_KEY}`,
        'pinata_secret_api_key': `${PINATA_SECRET_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...jsonData })
    })
    return await response.json();
  } catch (err) {
    console.log(err)
    return null;
  }
}

export async function generateNft(tokenUri: string, serialId:string) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await window.ethereum.enable()
  const accounts = await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, NFTWarranty_ABI, provider);
  const signer = provider.getSigner()
  const contractWithSigner = contract.connect(signer);
  console.log(contractWithSigner)
  const result = await contractWithSigner.mint(tokenUri, serialId);

  return result;
}

export async function getAllNfts() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await window.ethereum.enable();
  const accounts = await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, NFTWarranty_ABI, provider);
  const signer = provider.getSigner()
  const contractWithSigner = contract.connect(signer);

  const nfts = await contractWithSigner.getPublishedByUser();
  console.log(nfts)
}

export async function getJsonByHash(hash: string) {
  const response = await fetch(`https://api.pinata.cloud/pinning/searchIPFSObject/${hash}`, {
    method: 'GET',
    headers: {
      'pinata_api_key': `${PINATA_API_KEY}`,
      'pinata_secret_api_key': `${PINATA_SECRET_API_KEY}`
    }
  })
  return await response.json();
}