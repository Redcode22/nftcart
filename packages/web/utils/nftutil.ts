import { PINATA_API_KEY, PINATA_SECRET_API_KEY } from "./config";

export async function sendFileToIPFS(jsonData: any) {
  try {
    const raw = JSON.stringify({
      "pinataOptions": {
        "cidVersion": 1
      },
      "pinataMetadata": {
        "name": "testing",
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
      body: JSON.stringify({...jsonData})
    })

    return response;
  } catch (err) {
    console.log(err)
  }
}

// export async function generateOwnershipNFT() {
  
// }