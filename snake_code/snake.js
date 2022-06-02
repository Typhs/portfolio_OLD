import {getInputDirection, isGameOn, kill} from './input.js';

export const SNAKE_SPEED = 15; //Frames per second of snake velocity

export const snakeBody = [{x:13, y:13},{x:13, y:13},{x:13, y:13}]; //starting snake body

import { main} from './ctrl_snake.js';

var previousDirection = 0;

export function reset(){
    while(snakeBody.length > 0) {
        snakeBody.pop();
    }
        const gameBoard = document.getElementById('game-board');

    kill();

    setTimeout(function(){
        snakeBody.unshift({x:13, y:13});
        snakeBody.unshift({x:13, y:13});
        snakeBody.unshift({x:13, y:13});
        kill();
        gameBoard.innerHTML = '';
    }, 1000);


    

}

export function updateSnake(){

    var inputDirection = getInputDirection();

    var inverseDirection = {x:inputDirection.x*-1, y:inputDirection.y*-1};
    if (inverseDirection.x == -0){
        inverseDirection.x = 0;
    }
    if (inverseDirection.y == -0){
        inverseDirection.y = 0;
    }

    //this makes it so that the snake can't move backwards  
    if (previousDirection.x == inverseDirection.x && previousDirection.y == inverseDirection.y){
        inputDirection = previousDirection;
    };
    previousDirection = inputDirection;

    //part that makes the snake's head move and the snake's tail retract -> general moviment structure
    snakeBody.pop(); //removes LAST item of array
    snakeBody.unshift({x: snakeBody[0].x+inputDirection.x, y: snakeBody[0].y+inputDirection.y}); //adds item in front of array

    // part that makes the snake loop around the track: -----
    if (snakeBody[0].x == 26){
        snakeBody[0].x = 1;
    }else if (snakeBody[0].x == 0){
        snakeBody[0].x = 25;
    }
    //-----
    if (snakeBody[0].y == 26){
        snakeBody[0].y = 1;
    }else if (snakeBody[0].y == 0){
        snakeBody[0].y = 25;
    }

    //game-over check: ;

    if (isGameOn){
        for (var i=1; i < snakeBody.length; i=i+1){
            if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y){
                
                reset();
                
                //location.reload();
             
                
                
                
            }
        }    
    }
}

export function printSnake(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}