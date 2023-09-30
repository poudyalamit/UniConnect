require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require('hardhat-deploy');

SEPOLIA_URL =
  'https://eth-sepolia.g.alchemy.com/v2/2Ac5JFMe30TlakCsq5LvYjCoHeshcegB';
PRIVATE_KEY =
  '341ed82be2b2444d5a34018721601526dab4c021121e72b35e66cbbe85c43ace';

const { GANACHE_PVT_KEY, LUKSO_PVT_KEY, RINKEBY_PVT_KEY, INFURA_URL } =
  process.env;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: '0.8.15',
//   networks: {
//     local: {
//       url: 'HTTP://127.0.0.1:7545',
//       accounts: [GANACHE_PVT_KEY],
//     },
//     Sepolia: {
//       url: SEPOLIA_URL,
//       accounts: [PRIVATE_KEY],
//     },
//     lukso: {
//       url: 'https://rpc.l16.lukso.network',
//       accounts: [LUKSO_PVT_KEY],
//       live: true,
//       chainId: 2828,
//     },
//     rinkeby: {
//       url: INFURA_URL,
//       accounts: [RINKEBY_PVT_KEY],
//     },
//   },
//   namedAccounts: {
//     owner: 0,
//   },
// };
module.exports = {
  solidity: '0.8.15',
  networks: {
    local: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: [
        '0x0a7ed203ddcd342f4147c41ac4d0cd9037aa52cf97bcbc0f3a2f27f53b5c76bc',
      ],
    },
    Sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
