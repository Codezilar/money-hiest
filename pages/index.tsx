import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { SendTokens } from '../components/contract';

export default function Home() {
  return (
    <div className={''}>
      <header>
        <WalletMultiButton />
      </header>

      <main>
        {/* <GetTokens /> */}
        <SendTokens />
      </main>
    </div>
  );
}
