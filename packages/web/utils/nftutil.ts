import { ethers } from "ethers";
import { PINATA_API_KEY, PINATA_SECRET_API_KEY } from "./config";

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
  }
}

export async function mintNft(tokenUri: string) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract('', '', provider);
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