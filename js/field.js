const Field = function (view) {
    this.view = view;
    this.cells = createCells();
    this.applesAmount = 0;
    this.applesRespawn();
};

Field.incrementIndex = function(index) {
    return index === size - 1 ? 0 : ++index;
};

Field.decrementIndex = function(index) {
    return index === 0 ? size - 1 : --index;
};

Field.prototype.applesRespawn = function () {
    let necessity = maxAmountOfApples - this.applesAmount;
    let amountToAddNow = getRandom(necessity);
    this.setApples(amountToAddNow);
    if (this.applesAmount === 0) this.setApples(1);
};

Field.prototype.getCell = function (x, y) {
    return this.cells[getNumberInArrayBy(x, y)];
};

Field.prototype.getFreeCells = function() {
    let result = [];
    this.cells.map(c => {
        if(c.cellType === CellTypes.empty)
            result.push(c);
    });
    return result;
};

Field.prototype.setOneAppleRandomly = function() {
    let newApplePlace = this.getOneRandomFreeCell();
    this.setCellType(newApplePlace.x, newApplePlace.y, CellTypes.apple);
    this.applesAmount++;
};

Field.prototype.getOneRandomFreeCell = function() {
    return this.getFreeCells().getRandomElement();
};

Field.prototype.setApples = function(amount) {
    if (amount === 0) return;
    this.setOneAppleRandomly();
    this.setApples(amount - 1);
};

Field.prototype.setCellType = function (x, y, newType) {
    this.getCell(x, y).setNewType(newType);
    this.view.setColor(x, y, newType);
};

Field.prototype.setSnake = function(x, y) {
    this.setCellType(x, y, CellTypes.snake);
};

Field.prototype.removeSnake = function (x, y) {
    this.setCellType(x, y, CellTypes.empty);
};

function createCells() {
    let result = new Array(size * size);
    for(let y = 0; y < size; y++)
        for(let x = 0; x < size; x++) {
            let newCell = new Cell(x, y);
            newCell.setNewType(CellTypes.empty);
            result[getNumberInArrayBy(x, y)] = newCell;
        }
    return result;
}