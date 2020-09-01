type CatColor = 'black' | 'white' | 'gray' | 'orange' | 'purple';

const HairLength = {
  short: 1,
  medium: 2,
  long: 3,
} as const;

type HairLength = typeof HairLength[keyof typeof HairLength];

interface Cat {
  name: string;
  color: CatColor;
  age: number;
  hairLength: HairLength;
  greeting(): string;
}

export const luna: Cat = {
  age: 1,
  color: 'gray',
  name: 'luna',
  hairLength: HairLength.medium,
  greeting: () => 'meow',
};

export const tycho: Cat = {
  age: 1,
  color: 'gray',
  name: 'tycho',
  hairLength: HairLength.long,
  greeting: () => 'purrrrr',
};
