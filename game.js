
export function score(player, cpu) {
    if (player === 'rock' && cpu === 'rock') {
        return 'tie';
    } if (player === 'rock' && cpu === 'paper') {
        return 'cpu';
    } if (player === 'rock' && cpu === 'scissor') {
        return 'player';
    } if (player === 'scissor' && cpu === 'scissor') {
        return 'tie';
    } if (player === 'scissor' && cpu === 'rock') {
        return 'cpu';
    } if (player === 'scissor' && cpu === 'paper') {
        return 'player';
    } if (player === 'paper' && cpu === 'paper') {
        return 'tie';
    } if (player === 'paper' && cpu === 'rock') {
        return 'player';
    } if (player === 'paper' && cpu === 'scissor')
        return 'cpu'; 
}           

const throws = ['rock', 'paper', 'scissor'];

export function generateThrow() {
    const index = getRandomIntInclusive(0, 2);
    return throws[index];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
