export type FighterType = {
  name: string;
  lastName: string;
  nickname: string;
  age: number;
  division: string;
  wins: number;
  loses: number;
  total: number;
  id: number;
  img: string;
};
export type FightsType = {
  division: string;
  date: string;
  event: string;
  red: number;
  blue: number;
};

export const ufcData: FighterType[] = [
  {
    id: 1,
    name: "Holly",
    lastName: "Holm",
    nickname: "The Preacher's Daughter",
    age: 41,
    division: "Bantamweight",
    wins: 33,
    loses: 2,
    total: 38,
    img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_matchup_stats_full_body/s3/2023-03/HOLM_HOLLY_L_03-25.png?itok=2NkBl9jG",
  },
  {
    id: 2,
    name: "Mayra Bueno",
    lastName: "Silva",
    nickname: "Sheetara",
    age: 31,
    division: "Bantamweight",
    wins: 10,
    loses: 2,
    total: 13,
    img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_matchup_stats_full_body/s3/2023-03/SANTOS_YANA_R_03-25.png?itok=j3X8k7wU",
  },
];

export const ufcFightsData: FightsType[] = [
  {
    division: "Bantamweight",
    date: "July 16, 2023",
    event: "main event",
    red: 1,
    blue: 2,
  },
];
