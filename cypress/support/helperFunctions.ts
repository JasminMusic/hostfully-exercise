import Chance from 'chance';

export function customFormatDate(inputDate: string): string {
  const [month, day, year] = inputDate.split('/').map(Number);
  const formattedDate: string = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return formattedDate;
}

//Instance of Chance
const chance = new Chance();

const COMPUTER_NAME_LENGTH = 12;
const COMPUTER_NAME_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//Randomized variables
export const randomComputerName = chance.string({
  length: COMPUTER_NAME_LENGTH,
  pool: COMPUTER_NAME_POOL,
});

export const introducedDate: any = chance.date({
  year: chance.integer({min: 1985, max: 2021}),
  string: true,
});

export const discontinuedDate: any = chance.date({
  year: chance.integer({min: 2022, max: 2023}),
  string: true,
});
