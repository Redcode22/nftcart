# NFTcart
A blockchain based solution for providing ownership and warranty based on NFTs. It following clean code for readability and easy to maintain practices.

## Structure
This project uses monorepo architecture using the workspaces mechanism of YARN. The modules of project are inside the packages directory and each package has its own usage criteria.

### 1. web
This package hold the Next.js based implementation of Web3.0 client using Chakra UI and styled-components. ether.js is used to communicate with the contracts and is basic implementation of a ecommerce web application.

### 2. cms
This is content management system package to hold the product data for which the NFT has to be generated.

### 3. chains
Following package consists of the smart contracts and their tests written in solidity and typescipt respectively. It also has scripts for deployment which uses hardhat.

### 4. docs
This is docusaurus generated documentation web application to reflect the basic

### 5. mobile
This package will be furthur developed to work as mobile application.

## Technologies
- Solidity
- Hardhat
- Next.js
- Typescript
- Strapi
- Chakra UI
- Next.js
- Ethers
- Docusaurus
- Redux
- Metamask

## Aspects
- Clean code
- Swagger docs for CMS
- Admin panel via Strapi
- Web implementation of NFTcart
- Mobile application extensiblity
- Documentation for the project