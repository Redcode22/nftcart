require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/t3XuQ3Uk2iSSgx_Zk_anz4UZhok2yWys',
      accounts: ['c43c3434cee1ef5ef37d91ac29c5c96f1c53d9387558556d7480410170b03dbf']
    }
  }
}