import Hero from '@/components/Hero';
import TokenUtility from '@/components/TokenUtility';
import Claims from '@/components/Claims';
import HeroOne from '@/components/HeroOne';

export default function Airdrop() {
  return (
    <>
      <main className='main mt-[5rem]'>
        <div className="main-container">
          <Hero />
          <TokenUtility />
        </div>
      </main>
    </>
  );
}
