const {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} = require("@solana/web3.js");
const { getKeypairFromEnvironment } = require("@solana-developers/helpers");
require("dotenv").config();

const sendSol = async () => {
  const suppliedToPubkey = "3bUsg4o5TJWyukZtzieFZcawEkChzmPtVBRPzkyj1eHj";

  const toPubkey = new PublicKey(suppliedToPubkey);
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  const transaction = new Transaction();

  const LAMPORTS_TO_SEND = 5000;

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });

  transaction.add(sendSolInstruction);
  const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);

  console.log(
    ` 💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}`
  );
  console.log(`Transaction signature is ${signature}!`);
};

sendSol();
