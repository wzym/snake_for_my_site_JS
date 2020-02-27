globalThis.size = 20;
globalThis.maxAmountOfApples = 3;

const mySnake = new Snake(new Field(new View()));

document.addEventListener('keydown', function (event) {
     switch (event.code) {
         case 'KeyW':
             event.preventDefault();
             mySnake.direction = Directions.up;
             break;
         case 'KeyS':
             event.preventDefault();
             mySnake.direction = Directions.down;
             break;
         case 'KeyA':
             event.preventDefault();
             mySnake.direction = Directions.left;
             break;
         case 'KeyD':
             event.preventDefault();
             mySnake.direction = Directions.right;
             break;
     }
});