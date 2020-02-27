const Snake = function (field) {
    this.field = field;
    this.speed = 200;
    this.direction = this.getDirectionRandomly();
    this.body = new Queue();
    this.body.enqueue(this.field.getOneRandomFreeCell());
    this.motion = setInterval(() => this.move(), this.speed);
};

Snake.prototype.defineNewPosition = function () {
    let head = this.body.firstElement();
    let result;
    switch (this.direction) {
        case Directions.right:
            result = this.field.getCell(Field.incrementIndex(head.x), head.y);
            break;
        case Directions.left:
            result = this.field.getCell(Field.decrementIndex(head.x), head.y);
            break;
        case Directions.up:
            result = this.field.getCell(head.x, Field.decrementIndex(head.y));
            break;
        case Directions.down:
            result = this.field.getCell(head.x, Field.incrementIndex(head.y));
            break;
    }
    return result;
};

Snake.prototype.move = function () {
    let newPosition = this.defineNewPosition();
    this.processNewPosition(newPosition);
    this.moveForwardTheHead(newPosition);
};

Snake.prototype.processNewPosition = function(position) {
    if (position.cellType !== CellTypes.apple)
        this.pickUpTheTail();
    switch (position.cellType) {
        case CellTypes.apple:
            this.field.applesAmount--;
            this.field.applesRespawn();
            break;
        case CellTypes.snake:
            clearInterval(this.motion);
            break;
    }
};

Snake.prototype.pickUpTheTail = function () {
    let tail = this.body.dequeue();
    this.field.removeSnake(tail.x, tail.y);
};

Snake.prototype.moveForwardTheHead = function (newPosition) {
    this.body.enqueue(newPosition);
    this.field.setSnake(newPosition.x, newPosition.y);
};

Snake.prototype.getDirectionRandomly = function () {
    return Object.values(Directions).getRandomElement();
};