// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Ownership is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) existingURIs;

    constructor() ERC721("Ownership", "ONR") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function payToMint(address recipient, string memory uri)
        public
        payable
        returns (uint256)
    {
        require(existingURIs[uri] != 1, "URI already owned");
        require(msg.value >= 0.01 ether, "Payment Failed");
        uint256 newId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        existingURIs[uri] = 1;
        _mint(recipient, newId);
        _setTokenURI(newId, uri);
        return newId;
    }

    function transferOwnership(address recipient, uint256 tokenId)
        public
        onlyOwner
    {
        _transfer(msg.sender, recipient, tokenId);
    }
}