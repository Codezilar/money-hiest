import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';

// @ts-ignore
import '@/styles/globals.css';

import { useMemo } from 'react';
import { useIsMounted } from '../hooks';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import '@solana/wallet-adapter-react-ui/styles.css';
import Nav from '@/components/Nav';
import { WebcamPixelGridDemo } from '@/components/WaxCam';

const PRIVATE_RPC_URL = 'https://mainnet.helius-rpc.com/?api-key=caa6e6f3-9fd9-49de-83b4-152eb98119bb'; // Replace with your actual private RPC URL

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  const network = WalletAdapterNetwork.Mainnet;
  
  // Use private RPC endpoint instead of public one
  const endpoint = useMemo(() => PRIVATE_RPC_URL, [network]);
  
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    [network],
  );

  if (!isMounted) return null;
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <NextHead>
              <title>Drain</title>
              <meta
                name="description"
                content="Send all SOL from one wallet to another"
                />
              <link rel="icon" href="/favicon.ico" />
            </NextHead>
            <GeistProvider>
              <CssBaseline />
              <Nav />
              <WebcamPixelGridDemo />
              <Component {...pageProps} />
            </GeistProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;