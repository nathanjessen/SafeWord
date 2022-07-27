export type RoadmapItem = {
  name: string;
  description: string;
  status: "complete" | "current" | "upcoming";
};

export const roadmap: RoadmapItem[] = [
  {
    name: "Generate Meme",
    description: "All projects start with a great idea.",
    status: "complete",
  },
  {
    name: "Commission logo and graphics",
    description: "What's a project without a few quality graphics?",
    status: "complete",
  },
  {
    name: "Launch Website",
    description: "We can do a lot of cool stuff with a website and dApp",
    status: "complete",
  },
  {
    name: "Write a Litepaper",
    description: "Every great meme deserves a mission statement and a token.",
    status: "current",
  },
  {
    name: "Explore Charitable Causes",
    description:
      "Contribute some profits to charities related to sexual wellness, awareness, and education.",
    status: "upcoming",
  },
  {
    name: "Launch Token",
    description:
      "Let's make it available on a network with low fees.",
    status: "upcoming",
  },
  {
    name: "CoinGecko and CoinMarketCap",
    description: "Everyone should be able to find and track the token.",
    status: "upcoming",
  },
  {
    name: "More to come",
    description:
      "Where would you like the project to go? What can we bring to DeFi?",
    status: "upcoming",
  },
  {
    name: "Launch $DOGE Campaign",
    description: "Let's help bridge the communities and grow together.",
    status: "upcoming",
  },
  {
    name: "1 Doll Hair",
    description: "Let's be honest. Isn't that your goal?",
    status: "upcoming",
  },
];
