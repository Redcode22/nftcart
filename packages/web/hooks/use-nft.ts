import { ethers } from "ethers"
import { useState } from "react"

const useNft = (address: string) => {

  const [nft, setNft] = useState<ethers.Contract>()


}

export default useNft