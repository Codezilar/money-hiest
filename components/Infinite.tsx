"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; 

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "I threw in $500 just for laughs, and three weeks later I was able to pay off my mom's mortgage. I still can't believe this is real life.",
    name: "Marcus Thompson",
    title: "Early Investor - Turned $500 into $45K",
  },
  {
    quote:
      "Honestly thought it was a scam at first, but I kept seeing posts about it. Took a $200 gamble and now I'm sitting on a beach in Thailand. $JECKS changed my life.",
    name: "Sarah Chen",
    title: "Bought in at $0.000004",
  },
  {
    quote: "My only regret is not buying more. This community is insane in the best way possible. To the moon! 🚀",
    name: "BigBallzMike",
    title: "Holding since Day 1",
  },
  {
    quote:
      "I was skeptical about meme coins until a friend convinced me to throw in some play money. That 'play money' just paid for my wedding. Thank you $JECKS fam.",
    name: "Jessica Rodriguez",
    title: "Became a believer",
  },
  {
    quote:
      "Bought during the dip when everyone was panicking. Best decision I ever made. This token has legs and the community is rock solid.",
    name: "CryptoWhale_88",
    title: "Accidentally became a whale",
  },
];