// import functions

import { score, generateThrow } from './game';

// grab DOM elements

// set event listeners 
    // get user input
const buttons = document.querySelectorAll('.throw');
const outcomeDisplay = document.getElementById('outcome-display');
for (let button of buttons) {
    button.addEventListener('click', () => {
        const player = button.value;
        const cpu = generateThrow();
        const result = score(player, cpu);
        outcomeDisplay.textContent = result;
        console.log(player, cpu, result);
        
    });
}
    // use user input to update state 
    
    // update DOM to reflect the new state




    