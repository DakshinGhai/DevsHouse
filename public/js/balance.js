const { Connection, LAMPORTS_PER_SOL, PublicKey } = require("@solana/web3.js");

const suppliedPublicKey = "GXXKDtVZ9acsoAtEeBTvc2WcnUi4hPhjNWPUBExrwRCc";
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

connection.getBalance(publicKey).then((balanceInLamports) => {
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
  module.exports = {
    balanceInSOL,
  };
});
