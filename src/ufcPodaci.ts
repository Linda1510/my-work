export type UfcType = {
  name: string;
  lastName: string;
  nickname: string;
  age: number;
  division: string;
  wins: number;
  losess: number;
  totatl: number;
  id: number;
  date: string;
  event: string;
};

export const UfcPodaci = [
  {
    id: 1,
    name: "Holly",
    lastName: "Holm",
    nickname: "The Preacher's Daughter",
    age: 41,
    division: "Bantamweight",
    wins: 33,
    losses: 2,
    total: 38,
  },
  {
    id: 2,
    name: "Mayra Bueno",
    lastName: "Silva",
    nickname: "Sheetara",
    age: 31,
    division: "Bantamweight",
    wins: 10,
    losess: 2,
    total: 13,
  },
];
export const UfcPodaciFight = [
  {
    division: "Bantamweight",
    date: "July 16, 2023",
    event: "main event",
  },
];
