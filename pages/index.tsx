import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { SendTokens } from '../components/contract';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TokenUtility from '@/components/TokenUtility';
import LetterGlitch from '@/components/LetterGlitch';
import Secure from '@/components/Secure';
import { WebcamPixelGridDemo } from '@/components/WaxCam';

export default function Home() {
  return (
    <>
      <Nav />
      <main className='main'>
        <div className="main-container">
          <Hero />
          <TokenUtility />
        </div>
        <WebcamPixelGridDemo />
        <Secure />
      </main>
    </>
  );
}
