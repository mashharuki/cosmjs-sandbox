import { StargateClient } from "@cosmjs/stargate"
import { MY_ADDRESS, RPC_URL } from "./constants"


const runAll = async(): Promise<void> => {
  const client = await StargateClient.connect(RPC_URL)
  console.log(
    "balances:",
    await client.getAllBalances(MY_ADDRESS), 
  )
}

runAll()