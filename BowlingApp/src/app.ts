class BowlingGame {
    public rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1;
            } else if (this.isSpare(rollIndex)) {
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            } else {
                score += this.frameScore(rollIndex);
                rollIndex += 2;
            }
        }
        return score;
    }
//strike
    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === 10;
    }
//spare
    private isSpare(rollIndex: number): boolean {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
//strike Bonus

    private strikeBonus(rollIndex: number): number {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
//spare bonus
    private spareBonus(rollIndex: number): number {
        return this.rolls[rollIndex + 2];
    }
//framescore
    private frameScore(rollIndex: number): number {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}
//new bowling game
let game = new BowlingGame();

function rollBall(): void {
    let pins = Math.floor(Math.random() * 11);
    game.roll(pins);
    updateUI();
}
//reset bowling game
function resetGame(): void {
    game = new BowlingGame();
    document.getElementById('scoreboard')!.innerHTML = '';
    document.getElementById('total-score')!.textContent = '0';
}
//updateGame
function updateUI(): void {
    let scoreboard = document.getElementById('scoreboard')!;
    let totalScore = document.getElementById('total-score')!;
    scoreboard.innerHTML = game.rolls.map((roll) => `<div class='frame'>${roll}</div>`).join('');
    totalScore.textContent = game.score().toString();
}
