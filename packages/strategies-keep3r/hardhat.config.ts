// @todo hardhatConfig
// import hardhatConfig from '../commons/hardhat.config';

import '@typechain/hardhat';
import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-abi-exporter';

const mnemonic = 'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
  abiExporter: {
    path: './dist/abi',
    runOnCompile: true,
    clear: true,
    flat: false,
    spacing: 2,
    pretty: true,
  },
  typechain: {
    outDir: 'src/',
    target: 'ethers-v5',
  },

// WARNING: Before version 0.8.6 omitting the 'enabled' key was not equivalent to setting
// it to false and would actually disable all the optimizations.
// see: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description

  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.4',
        settings: {
          
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.17',
      },
    ],
  },
};

export default config;
/** @exports HardhatUserConfig */