import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n');
        let sum = 0;
        lines.forEach((game) => {
            const [_, gameId, reveals] = game.match(/Game (\d+): (.+)/)!;
            console.log({gameId, reveals});
            const revealsParts = reveals.split('; ');
            const isValidGame = revealsParts.every((r) => {
                const ballsByColors = r.split(', ');
                const blue = ballsByColors.filter((x) => x.includes('blue'))[0]?.split(' ')[0] ?? 0;
                const green = ballsByColors.filter((x) => x.includes('green'))[0]?.split(' ')[0] ?? 0;
                const red = ballsByColors.filter((x) => x.includes('red'))[0]?.split(' ')[0] ?? 0;
                return Number(blue) <= 14 && Number(green) <= 13 && Number(red) <= 12;
            });
            if (isValidGame) {
                sum += Number(gameId);
            }
        });
        return `${sum}`;
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n');
        let sum = 0;
        lines.forEach((game) => {
            const [_, gameId, reveals] = game.match(/Game (\d+): (.+)/)!;
            console.log({gameId, reveals});
            const revealsParts = reveals.split('; ');
            const maximumSet = revealsParts.reduce((prev, r) => {
                const ballsByColors = r.split(', ');
                const blue = ballsByColors.filter((x) => x.includes('blue'))[0]?.split(' ')[0] ?? 0;
                const green = ballsByColors.filter((x) => x.includes('green'))[0]?.split(' ')[0] ?? 0;
                const red = ballsByColors.filter((x) => x.includes('red'))[0]?.split(' ')[0] ?? 0;
                if (prev.red < Number(red)) {
                    prev.red = Number(red);
                }
                if (prev.blue < Number(blue)) {
                    prev.blue = Number(blue);
                }
                if (prev.green < Number(green)) {
                    prev.green = Number(green);
                }
                return prev;
            }, { 'blue': 0, 'red': 0, 'green': 0 });

            sum += maximumSet.blue * maximumSet.red * maximumSet.green;
        });
        return `${sum}`;
    }
}

export default new Day2;
