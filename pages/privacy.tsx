import { Button } from '@geist-ui/core';

export default function Terms() {
  return (
    <div className="relative top-0 h-screen w-screen">
      {/* <div className="absolute h-full inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" /> */}
      <div className='about'>
        <div className="about_container">
          <h1 className='about-top'>Privacy Policy</h1>
          <div className="our_misson">
            <h1>
              1. Acceptance of Terms
            </h1>
            <p>We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. Here's the information we collect:</p>
            <ul>
                <li>Basic account information: We ask for basic information from you in order to set up your account.</li>
                <li>Wallet addresses: We collect wallet addresses to process airdrops and track token distributions.</li>
                <li>Log information: Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available.</li>
            </ul>
          </div>
          <div className="who_we">
            <h1>How We Use Information</h1>
            <p>We use information about you as mentioned above and for the purposes listed below:</p>
            <ul>
                <li>To provide our services—for example, to set up and maintain your account or charge you for any of our paid services.</li>
                <li>To further develop and improve our services—for example by adding new features.</li>
                <li>To monitor and analyze trends and better understand how users interact with our services.</li>
                <li>To communicate with you about offers and promotions offered by Phantom Airdrop and others we think will be of interest to you.  </li>
            </ul>          
          </div>
          <div className="our_misson">
            <h1>Security</h1>
            <p>We take reasonable precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
          </div>
          <div className="who_we">
            <h1>Cookies</h1>
            <p>We use cookies to store certain information, such as your login session. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          </div>
          <div className="our_misson">
            <h1>Changes to This Privacy Policy</h1>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </div>
          <div className="who_we">
            <h1>Contact Us</h1>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@phantomairdrop.com.</p>
          </div>

        </div>
      </div>
    </div>
  );
}