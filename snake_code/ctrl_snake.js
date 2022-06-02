import {SNAKE_SPEED,reset, updateSnake as updateSnakeM, printSnake as printSnakeM} from './snake.js';

import {printFood as printFoodM, generateFood as generateFoodM} from './food1.js';
import { isGameOn } from './input.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');


export function main(currentTime){
    const secsSinceLastRender = (currentTime-lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if (isGameOn){
        if (secsSinceLastRender<(1/SNAKE_SPEED)){
        return;
    }
    lastRenderTime = currentTime;

    update();
    printInterface();
    }
    
}


$("#gameboy-reset").click(function () { 
   reset();
});

function update(){
    updateSnakeM();
    generateFoodM();
}

function printInterface(){
    gameBoard.innerHTML = '';
    printSnakeM(gameBoard);
    printFoodM(gameBoard);
}


window.requestAnimationFrame(main);