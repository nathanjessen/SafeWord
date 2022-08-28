export type Feature = {
  name: string;
  share: string;
  description: string;
};

export const features: Feature[] = [
  {
    name: 'Public',
    share: '69%',
    description:
      'The bulk share will be available to the public through an IDO.',
  },
  {
    name: 'Pineapple Fund',
    share: '10%',
    description: 'A self replenishing fund dedicated to charitable causes.',
  },
  {
    name: 'Marketing Fund',
    share: '21%',
    description:
      'An allocation to pay for exchange listings, farming incentives, and to pay the team.',
  },
];
