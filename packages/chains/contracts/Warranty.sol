// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Warranty is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    string public productName;
    uint256 public warrantyValidity;

    constructor() ERC721("Warranty", "RDC") {
        warrantyValidity = (block.timestamp + 365 days);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
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

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function transferWarranty(address to, uint256 tokenId) public onlyOwner {
        _transfer(msg.sender, to, tokenId);
    }

    function viewOwner(uint256 tokenId) public view returns (address) {
        return ownerOf(tokenId);
    }

    function isUnderWarranty(uint256 tokenId) public view returns(bool) {
        return block.timestamp > warrantyValidity;
    }

    function decayWarranty(uint256 tokenId) public onlyOwner {
        require(block.timestamp > warrantyValidity);
        _burn(tokenId);
    }
}