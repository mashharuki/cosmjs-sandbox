import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const generateKey = async (): Promise<void> => {
    const walletOptions = { prefix: "neutron" };
    const wallet: DirectSecp256k1HdWallet = await DirectSecp256k1HdWallet.generate(24, walletOptions);
    process.stdout.write(wallet.mnemonic);
    const accounts = await wallet.getAccounts();
    console.error("Mnemonic with 1st account:", accounts[0].address);
}

generateKey();