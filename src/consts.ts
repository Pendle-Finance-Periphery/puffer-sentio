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
  YT: '0x391b570e81e354a85a496952b66adc831715f54f',
  LP: [
    {
      address: '0x17be998a578fd97687b24e83954fec86dc20c979',
      deployedBlock: 19309659,
    },
  ],
  START_BLOCK: 19309573,
  TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
  EQB_STAKING: ['0xce15338f91a022497f614a37a555c7b6eac49ae3'],
  PENPIE_RECEIPT_TOKEN: ['0xc537f33af05a2060b733361b4b76471177f6ee27'],
  // STAKEDAO_RECEIPT_TOKEN: "0xdd9df6a77b4a4a07875f55ce5cb6b933e52cb30a",
  LIQUID_LOCKERS: [
    {
      // Penpie
      address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
      lpToken: '0x17be998a578fd97687b24e83954fec86dc20c979',
      receiptToken: '0xc537f33af05a2060b733361b4b76471177f6ee27',
    },
    {
      // EQB
      address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
      lpToken: '0x17be998a578fd97687b24e83954fec86dc20c979',
      receiptToken: '0xce15338f91a022497f614a37a555c7b6eac49ae3',
    },

    // {
    //   // Penpie
    //   address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
    //   lpToken: '0x38100a480dbed278b0fe57ba80a75498a7dc5bb1',
    // },
    // {
    //   // EQB
    //   address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
    //   lpToken: '0x38100a480dbed278b0fe57ba80a75498a7dc5bb1',
    //   receiptToken: '0x4e7322911261afe0b9e89d47fc249c148330c2af',
    // },
  ],
};
