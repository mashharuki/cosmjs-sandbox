import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import * as fs from 'fs';
import { RPC_URL } from "./constants";

/**
 * ニーモニックコードを読み取る
 * @param filePath 
 * @returns 
 */
const getSignerFromMnemonicFile = async (
  filePath: string
): Promise<OfflineDirectSigner> => {
  const mnemonic = (await fs.readFileSync(filePath)).toString().trim();
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "neutron",
  });
};

/**
 * メインとなるスクリプト
 */
const runAll = async(): Promise<void> => {
  const aliceSigner: OfflineDirectSigner = await getSignerFromMnemonicFile("./testnet.neutron.mnemonic.key")
  const alice = (await aliceSigner.getAccounts())[0].address
  const bob = "neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms"
  console.log("sender address", alice)
  console.log("recipient address", bob)

  const signingClient = await SigningStargateClient.connectWithSigner(RPC_URL, aliceSigner)

  // Execute the sendTokens Tx and store the result
  const result = await signingClient.sendTokens(
    alice,
    bob,
    [
      { 
        denom: "untrn", 
        amount: "10000" 
      }
    ],
    {
      amount: [
        { 
          denom: "untrn", 
          amount: "5000" 
        }
      ],
      gas: "200000",
    },
  )
	console.log(result);
}

runAll()