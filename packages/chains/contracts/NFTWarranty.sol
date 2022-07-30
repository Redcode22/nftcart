// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTWarranty is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenID;

    Counters.Counter private _productSold;

    struct PublishedToken {
        uint256 tokenID;
        address payable owner;
        address payable seller;
        uint256 expiry;
        string serialID;
    }

    event Success(
        uint256 indexed tokenID,
        address owner,
        address seller,
        uint256 expiry,
        string serialID
    );

    mapping(uint256 => PublishedToken) private publishedTokens;

    constructor() ERC721("NFTWarranty", "NFTC") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function getTokenByCurrentID() public view returns (PublishedToken memory) {
        uint256 currentTokenID = _tokenID.current();
        return publishedTokens[currentTokenID];
    }

    function getListedByTokenID(uint256 tokenID)
        public
        view
        returns (PublishedToken memory)
    {
        return publishedTokens[tokenID];
    }

    function getCurrentTokenID() public view returns (uint256) {
        return _tokenID.current();
    }

    function mint(string memory tokenURI, string memory serialID)
        public
        payable
        returns (uint256)
    {
        _tokenID.increment();
        uint256 newTokenID = _tokenID.current();

        _safeMint(msg.sender, newTokenID);
        _setTokenURI(newTokenID, tokenURI);
        syncToBlockchain(newTokenID, serialID);
        return newTokenID;
    }

    function syncToBlockchain(uint256 tokenID, string memory serialID) private {
        publishedTokens[tokenID] = PublishedToken(
            tokenID,
            payable(address(this)),
            payable(msg.sender),
            0,
            serialID
        );

        _transfer(msg.sender, address(this), tokenID);
        emit Success(tokenID, address(this), msg.sender, 0, serialID);
    }

    function getPublishedByUser()
        public
        view
        returns (PublishedToken[] memory)
    {
        uint256 totalItemCount = _tokenID.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                publishedTokens[i + 1].owner == msg.sender ||
                publishedTokens[i + 1].seller == msg.sender
            ) {
                itemCount += 1;
            }
        }

        PublishedToken[] memory items = new PublishedToken[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                publishedTokens[i + 1].owner == msg.sender ||
                publishedTokens[i + 1].seller == msg.sender
            ) {
                uint256 currentId = i + 1;
                PublishedToken storage currentItem = publishedTokens[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // This function to be called as soon as sale is completed and user can get the digital invoice.
    function transferByID(uint256 tokenID, uint256 expiry) public payable {
        require(expiry > 0, "Please enter a valid expiry time");

        if (publishedTokens[tokenID].expiry == 0) {
            publishedTokens[tokenID].expiry = block.timestamp + expiry;
        }

        publishedTokens[tokenID].seller = payable(msg.sender);

        _productSold.increment();

        _transfer(address(this), msg.sender, tokenID);
        approve(address(this), tokenID);
    }

    function isUnderWarranty(uint256 tokenID) public returns(bool)  {
        require(publishedTokens[tokenID].expiry != 0, "Warranty Doesn't exist");
        require(
            block.timestamp > publishedTokens[tokenID].expiry,
            "Warranty is expired"
        );
        return true;
    }

    function burnNFTByID(uint256 tokenID) public payable {
        require(publishedTokens[tokenID].expiry != 0, "Warranty Doesn't exist");
        require(
            block.timestamp > publishedTokens[tokenID].expiry,
            "Warranty is expired"
        );

        _burn(tokenID);
    }
}
