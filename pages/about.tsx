import { Button } from '@geist-ui/core';

export default function About() {
  return (
    <div className="relative top-0 h-screen w-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className='about'>
        <div className="about_container">
          <h1 className='about-top'>About Phantom Airdrop</h1>
          <div className="our_misson">
            <h1>
              Our Mission
            </h1>
            <p>Phantom Airdrop was created with a simple yet powerful mission: to democratize access to blockchain rewards and make token airdrops accessible to everyone in the crypto ecosystem. We believe in the power of decentralized finance to transform lives and want to ensure everyone has an equal opportunity to participate.</p>
          </div>
          <div className="who_we">
            <h1>Who We Are</h1>
            <p>We are a team of blockchain enthusiasts, developers, and crypto veterans who have experienced firsthand the transformative power of quality airdrops. After years of navigating the often confusing world of token distributions, we decided to create a platform that makes the process transparent, fair, and accessible.</p>
            <p>Our team brings together expertise from finance, blockchain development, and user experience design to create the most intuitive and secure airdrop platform in the crypto space.</p>
          </div>
          <div className="years">
            <div className="our_misson">
              <h1>3+ Years</h1>
              <p>In Blockchain</p>
            </div>
            <div className="our_misson">
              <h1>$10M+</h1>
              <p>Tokens Distributed</p>
            </div>
            <div className="our_misson">
              <h1>100,000+</h1>
              <p>Happy Users</p>
            </div>
          </div>
          <div className="who_we">
            <h1>Our Technology</h1>
            <p>Security is our top priority. We've built our platform using the latest blockchain technologies and security protocols to ensure your wallet information and transactions are always protected.</p>
            <p>Our smart contracts are audited by leading security firms, and we maintain a transparent operation that you can verify on-chain at any time.</p>
          </div>
          <div className="our_misson">
            <h1>
              Join Us
            </h1>
            <p>Whether you're new to crypto or a seasoned veteran, Phantom Airdrop is designed for you. We're constantly evolving and improving our platform based on community feedback.</p>
            <p>Join us in our mission to make token airdrops accessible to everyone and help shape the future of decentralized finance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}