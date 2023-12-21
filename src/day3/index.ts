import { Day } from '../day';

class Day3 extends Day {

  constructor() {
    super(3);
  }

  constructNumber(row: string, columnIdx: number): number {
    let wholeNumber = [];
    wholeNumber[columnIdx] = row[columnIdx];
    for (let i = columnIdx + 1; i < row.length; i++) {
        if (this.isSymbol(row[i]) || row[i] === '.') {
            break;
        }

      if (/\d/.test(row[i])) {
        wholeNumber[i] = row[i];
      }
    }
    for (let i = columnIdx - 1; i >= 0; i--) {
        if (this.isSymbol(row[i]) || row[i] === '.') {
            break;
        }

      if (/\d/.test(row[i])) {
        wholeNumber[i] = row[i];
      }
    }
    return Number(wholeNumber.join('').trim());
  }

  private isSymbol(letter?: string): boolean {
    return letter !== undefined && letter !== '.' && !/\d/.test(letter);
  }

  solveForPartOne(input: string): string {
    let sum = 0;
    const lines = input.split('\n');
    lines.forEach((row, rowIdx) => {
      let isNumber = false;
      row.split('').forEach((column, columnIdx) => {
        if (/\d/.test(column)) {
          if (isNumber) return;
          const isPart =
            this.isSymbol(lines[rowIdx - 1]?.[columnIdx - 1]) ||
            this.isSymbol(lines[rowIdx - 1]?.[columnIdx]) ||
            this.isSymbol(lines[rowIdx - 1]?.[columnIdx + 1]) ||
            this.isSymbol(lines[rowIdx]?.[columnIdx - 1]) ||
            this.isSymbol(lines[rowIdx]?.[columnIdx + 1]) ||
            this.isSymbol(lines[rowIdx + 1]?.[columnIdx - 1]) ||
            this.isSymbol(lines[rowIdx + 1]?.[columnIdx]) ||
            this.isSymbol(lines[rowIdx + 1]?.[columnIdx + 1]);
          if (isPart) {
            isNumber = true;
            const wholeNumber = this.constructNumber(row, columnIdx);
            console.log({ wholeNumber });
            sum += wholeNumber;
          }
        } else {
          isNumber = false;
        }
      });
    });
    return `${sum}`;
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day3;
