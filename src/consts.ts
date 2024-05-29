import { EthChainId } from '@sentio/sdk/eth';

export const CONFIG = {
  BLOCKCHAIN: EthChainId.ETHEREUM,
  SETTLE_FREQUENCY: 60 * 24,
};

export const MISC_CONSTS = {
  ONE_E18: BigInt('1000000000000000000'),
  ONE_DAY_IN_MINUTE: 60 * 24,
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  MULTICALL_BATCH: 256,
  MULTICALL: '0xca11bde05977b3631167028862be2a173976ca11',
};

export const PENDLE_POOL_ADDRESSES = {
  SY: '0x253008ba4ae2f3e6488dc998a5321d4eb1a0c905',
  YT: '0x1a65eb80a2ac3ea6e41d456ddd6e9cc5728bef7c',
  LP: [
    {
      address: '0xa54fc268101c8b97de19ef3141d34751a11996b2',
      deployedBlock: 19910457,
    },
  ],
  START_BLOCK: 19309573,
  TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
  EQB_STAKING: ['0x043e15beed0a2bf7241c4290a812f6015c586386'],
  PENPIE_RECEIPT_TOKEN: ['0xee25071601550d335a044806502a4162066ecd02'],
  STAKEDAO_RECEIPT_TOKEN: "0xb41d7d7f7354337e0498e403dbd592742d87c05f",
  LIQUID_LOCKERS: [
    {
      // Penpie
      address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
      lpToken: '0xa54fc268101c8b97de19ef3141d34751a11996b2',
      receiptToken: '0xee25071601550d335a044806502a4162066ecd02',
    },
    {
      // EQB
      address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
      lpToken: '0xa54fc268101c8b97de19ef3141d34751a11996b2',
      receiptToken: '0x043e15beed0a2bf7241c4290a812f6015c586386',
    },
    {
      // Stakedao
      address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
      lpToken: '0xa54fc268101c8b97de19ef3141d34751a11996b2',
      receiptToken: '0xb41d7d7f7354337e0498e403dbd592742d87c05f',
    }
  ],
};
