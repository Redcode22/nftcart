export async function sendFileToIPFS(jsonData: any) {
  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'pinata_api_key': '',
        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
        "Content-Type": "application/data"
      }
    })

    return response;
  } catch (err) {
    console.log(err)
  }
}

export async function generateOwnershipNFT() {
  
}