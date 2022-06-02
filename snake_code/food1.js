import { isGameOn } from './input.js';
import {snakeBody} from './snake.js';

export var food = {x : 13,y : 13};
food.x = Math.floor(Math.random() * 25) + 1;  //x = random.randint(1,25)
food.y = Math.floor(Math.random() * 25) + 1;


export function generateFood(){
    if (isGameOn && snakeBody[0].x == food.x && snakeBody[0].y == food.y){
        console.log("nom nom...");
        snakeBody.push(snakeBody[snakeBody.length - 1]) //enlargens the snek

        while (true){
            food.x = Math.floor(Math.random() * 25) + 1;  //x = random.randint(1,25)
            food.y = Math.floor(Math.random() * 25) + 1;
            if (!snakeBody.includes(food)){ //guarantees that the food can't spawn inside the snek
                break;  
            }    
        }

    }
}

export function printFood(gameBoard){
    const foodElement = document.createElement('div');

    foodElement.style.gridRow = food.y;
    foodElement.style.gridColumn = food.x;

    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}