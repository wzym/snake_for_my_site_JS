const getRandom = (max) => { // returns 1 .. max
    return Math.round(Math.random() * max);
};

const getNumberInArrayBy = function(x, y) {
    return x * size + y;
};

const getNumberInArrayByCell = function (cell) {
    return getNumberInArrayBy(cell.x, cell.y);
};

Array.prototype.getRandomElement = function () {
    let index = Math.floor(Math.random() * this.length);
    return this[index];
};

const Queue = function () {
    this.maxCapacity = size * size;
    Object.freeze(this.maxCapacity);
    this.body = new Array(this.maxCapacity);
    this.firstElementIndex = -1;
    this.lastElementIndex = 0;
};

Queue.prototype.enqueue = function(newElement) {
    this.firstElementIndex = this.incrementIndex(this.firstElementIndex);
    this.body[this.firstElementIndex] = newElement;
};

Queue.prototype.dequeue = function() {
    let result = this.body[this.lastElementIndex];
    this.lastElementIndex = this.incrementIndex(this.lastElementIndex);
    return result;
};

Queue.prototype.size = function () {
    let differ = this.firstElementIndex - this.lastElementIndex;
    return differ < 0 ? 0 : differ + 1;
};

Queue.prototype.incrementIndex = function (index) {
    return index === this.maxCapacity - 1 ? 0 : index + 1;
};

Queue.prototype.firstElement = function () {
    return this.body[this.firstElementIndex];
};