import { StargateClient } from "@cosmjs/stargate"
import { RPC_URL } from "./constants"


const runAll = async(): Promise<void> => {
  const client = await StargateClient.connect(RPC_URL)
  console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
}

runAll()