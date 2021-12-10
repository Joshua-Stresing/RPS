// IMPORT MODULES under test here:
 import { score } from '../game.js';

const test = QUnit.test;

test('player rock, cpu rock is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player rock, cpu paper is cpu', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'cpu';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, cpu scissors is player', (expect) => {
    const player = 'rock';
    const computer = 'scissor';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, cpu paper is tie', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, cpu rock is tie', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, cpu scissor is cpu', (expect) => {
    const player = 'paper';
    const computer = 'scissor';
    const expected = 'cpu';
    const actual = score(player, computer);
    console.log(actual);
    expect.equal(actual, expected);
});

test('player scissor, cpu scissor is tie', (expect) => {
    const player = 'scissor';
    const computer = 'scissor';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player scissor, cpu rock is cpu', (expect) => {
    const player = 'scissor';
    const computer = 'rock';
    const expected = 'cpu';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player scissor, cpu paper is player', (expect) => {
    const player = 'scissor';
    const computer = 'paper';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

