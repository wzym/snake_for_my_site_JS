const Cell = function (x, y) {
    this.cellType = CellTypes.empty;
    this.x = x;
    this.y = y;
};

Cell.prototype.setNewType = function (newType) {
    this.cellType = newType;
};

/*Cell.prototype.getNumberInArray = function () {
    return getNumberInArrayByCell(this);
};*/