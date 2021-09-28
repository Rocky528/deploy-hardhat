import * as dotenv from 'dotenv';
dotenv.config({path: __dirname + '/.env'});

import {node_url, accounts} from './utils/network';

import {HardhatUserConfig} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';

// This adds support for typescript paths mappings
import 'tsconfig-paths/register';

import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import '@typechain/hardhat';
import 'solidity-coverage';

import './tasks/accounts';

const config: HardhatUserConfig = {
  // Your type-safe config goes here
  solidity: '0.7.6',
  namedAccounts: {
    deployer: 0,
    proxyOwner: 1,
  },
  networks: {
    localhost: {
      url: node_url('localhost'),
      accounts: accounts(),
    },
    staging: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    production: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    mainnet: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    kovan: {
      url: node_url('kovan'),
      accounts: accounts('kovan'),
    },
    goerli: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
    },
    fuji: {
      url: node_url('fuji'),
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: accounts('fuji'),
    },
    avalanche: {
      url: node_url('avalanche'),
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: accounts('avalanche'),
    },
    matic_testnet: {
      url: node_url('matic_testnet'),
      accounts: accounts('matic_testnet'),
    },
    matic: {
      url: node_url('matic'),
      accounts: accounts('matic'),
    },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
    deploy: './deploy',
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.CMC_API_KEY,
    maxMethodDiff: 10,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 0,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};

export default config;
