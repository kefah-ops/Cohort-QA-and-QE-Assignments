import { BowlingGame } from "./app";
let game;
beforeEach(() => {
    game = new BowlingGame();
});
const rollMultiple = (times, pins) => {
    for (let i = 0; i < times; i++) {
        game.roll(pins);
    }
};
test("gutter game (all rolls are 0)", () => {
    rollMultiple(20, 0);
    expect(game.score()).toBe(0);
});
test("all ones (rolling 1 for all 20 rolls)", () => {
    rollMultiple(20, 1);
    expect(game.score()).toBe(20);
});
test("single spare followed by a 3", () => {
    game.roll(5);
    game.roll(5); // Spare
    game.roll(3);
    rollMultiple(17, 0);
    expect(game.score()).toBe(16);
});
test("single strike followed by 4 and 3", () => {
    game.roll(10); // Strike
    game.roll(4);
    game.roll(3);
    rollMultiple(16, 0);
    expect(game.score()).toBe(24);
});
test("perfect game (all strikes)", () => {
    rollMultiple(12, 10);
    expect(game.score()).toBe(300);
});
test("random game scenario", () => {
    game.roll(10); // Strike
    game.roll(7);
    game.roll(3); // Spare
    game.roll(9);
    game.roll(0);
    game.roll(10); // Strike
    game.roll(0);
    game.roll(8);
    game.roll(8);
    game.roll(2); // Spare
    game.roll(0);
    game.roll(6);
    game.roll(10); // Strike
    game.roll(10); // Strike
    game.roll(10); // Strike
    game.roll(8);
    game.roll(1);
    expect(game.score()).toBe(167);
});
