
let inputDirection = {x:0, y:0};

//let previousDirection = inputDirection;
export var isGameOn = false;
var pause = false;

// window.addEventListener('keydown', e =>{
//     switch (e.key){
//         case 'ArrowUp':
//             inputDirection = {x:0 , y:-1};
//             break;
//         case 'ArrowDown':
//             inputDirection = {x:0 , y:1};
//             break;
//         case 'ArrowLeft':
//             inputDirection = {x:-1 , y:0};
//             break;
//         case 'ArrowRight':
//             inputDirection = {x:1 , y:0};
//             break;
//         default:
//             return;
//     }
//     isGameOn = true; 
// }) 

$("#gameboy-up").click(function () { 
    if (pause) return;
    inputDirection = {x:0 , y:-1};
    isGameOn = true; 
});
$("#gameboy-down").click(function () { 
    if (pause) return;
    inputDirection = {x:0 , y:1};
    isGameOn = true; 
});
$("#gameboy-left").click(function () { 
    if (pause) return;
    inputDirection = {x:-1 , y:0};
    isGameOn = true; 
});
$("#gameboy-right").click(function () { 
    if (pause) return;
    inputDirection = {x:1 , y:0};
    isGameOn = true; 
});

export function kill() {
    isGameOn = false;
    pause = true;
    setTimeout(function(){
        pause = false;
    }, 1500);
  }


export function getInputDirection(){
    return inputDirection;
}