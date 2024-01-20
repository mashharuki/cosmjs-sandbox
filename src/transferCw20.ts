import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { toUtf8 } from "@cosmjs/encoding";
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { readFile } from "fs/promises";
import { CW20_CONTRACT_ADDRESS, RPC_URL } from './constants';

/**
 * ニーモニックコードを取得する
 * @param filePath 
 * @returns 
 */
const getSignerFromMnemonicFile = async (filePath: string): Promise<OfflineDirectSigner> => {
  const mnemonic = (await readFile(filePath)).toString().trim();
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "neutron",
  });
};

/**
 * CW20トークンを送金するスクリプト
 */
const sendCw20Token = async () => {
  const aliceSigner: OfflineDirectSigner = await getSignerFromMnemonicFile("./testnet.neutron.mnemonic.key")
  const client = await SigningCosmWasmClient.connectWithSigner(RPC_URL, aliceSigner);
  const alice = (await aliceSigner.getAccounts())[0].address

  // CW20送金トランザクション用のメッセージを作成
  const sendMsg = {
    transfer: {
      recipient: "neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms",
      amount: "5",
    },
  };
  // 実行する内容
  const msgExecuteContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    value: {
      sender: alice,
      contract: CW20_CONTRACT_ADDRESS,
      msg: toUtf8(JSON.stringify(sendMsg)),
      funds: [],
    },
  };

  const fee = {
    amount: [{ denom: "untrn", amount: "5000" }],
    gas: "200000", // ガスリミット
  };
  // トランザクションに署名して送金
  const result = await client.signAndBroadcast(alice, [msgExecuteContract], fee);
  console.log("Transaction result:", result);
};

sendCw20Token().catch(console.error);