const { Connection, LAMPORTS_PER_SOL, PublicKey } = require("@solana/web3.js");

// Define a function to get balance by public key
async function getBalanceByPublicKey(suppliedPublicKey) {
  if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
  }

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const publicKey = new PublicKey(suppliedPublicKey);

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );

  return balanceInSOL;
}

// Export the function
module.exports = {
  getBalanceByPublicKey,
};
