"use strict";
class BowlingGame {
    constructor() {
        this.rolls = [];
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1;
            }
            else if (this.isSpare(rollIndex)) {
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else {
                score += this.frameScore(rollIndex);
                rollIndex += 2;
            }
        }
        return score;
    }
    //strike
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }
    //spare
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
    //strike Bonus
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
    //spare bonus
    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }
    //framescore
    frameScore(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}
//new bowling game
let game = new BowlingGame();
function rollBall() {
    let pins = Math.floor(Math.random() * 11);
    game.roll(pins);
    updateUI();
}
//reset bowling game
function resetGame() {
    game = new BowlingGame();
    document.getElementById('scoreboard').innerHTML = '';
    document.getElementById('total-score').textContent = '0';
}
//updateGame
function updateUI() {
    let scoreboard = document.getElementById('scoreboard');
    let totalScore = document.getElementById('total-score');
    scoreboard.innerHTML = game.rolls.map((roll) => `<div class='frame'>${roll}</div>`).join('');
    totalScore.textContent = game.score().toString();
}
