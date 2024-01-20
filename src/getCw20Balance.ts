import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import {
  CW20_CONTRACT_ADDRESS,
  MY_ADDRESS,
  RPC_URL
} from './constants';

/**
 * 残高取得のためのスクリプト
 */
const queryBalance = async () => {
  const client = await SigningCosmWasmClient.connect(RPC_URL)
  const result = await client.queryContractSmart(CW20_CONTRACT_ADDRESS, {
    balance: { address: MY_ADDRESS },
  })
  console.log(result)
};

queryBalance().catch(console.error);