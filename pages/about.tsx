import { Button } from '@geist-ui/core';

export default function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About This App</h1>
      <p>This is a Solana wallet drainer application.</p>
      <p>It allows you to drain SOL from your connected wallet, keeping a small reserve for gas fees.</p>
      <Button onClick={() => window.history.back()}>Go Back</Button>
    </div>
  );
}