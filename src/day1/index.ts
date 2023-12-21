import { Day } from '../day';

const dictionary = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

class Day1 extends Day {

  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    const lines = input.split('\n');
    let calibration = 0;
    lines.forEach((l) => {
      if (l.length === 0) {
        return;
      }
      const firstDigit = l.match(/^\w*?(\d)/)![1];
      const lastDigit = l.match(/.*(\d)\w*$/)![1];
      console.log({firstDigit, lastDigit});
      calibration += Number(`${firstDigit}${lastDigit}`);
    });
    return `${calibration}`;
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n');
    let calibration = 0;
    lines.forEach((l) => {
      if (l.length === 0) {
        return;
      }
      const firstDigit = l.match(/^\w*?(\d|one|two|three|four|five|six|seven|eight|nine)/)![1];
      const lastDigit = l.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)\w*$/)![1];
      console.log({firstDigit, lastDigit});
      calibration += Number(`${(dictionary as any)[firstDigit] || firstDigit}${(dictionary as any)[lastDigit] || lastDigit}`);
    });
    return `${calibration}`;
  }
}

export default new Day1;
