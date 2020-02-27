const View = function() {
    this.cells = new Array(size * size);
    createTableAndAddToHTML(this.cells);

    this.getCellByCoordinates = function(x, y) {
        return this.cells[getNumberInArrayBy(x, y)];
    };

    this.setColor = function(x, y, newColor) {
        this.getCellByCoordinates(x, y).style.background = newColor;
    };

    function createTableAndAddToHTML(cells){
        let table  = document.createElement('table');

        for(let y = 0; y < size; y++){
            let tr = table.insertRow();
            for(let x = 0; x < size; x++){
                let td = tr.insertCell();
                td.classList.add('cell');
                td.id = `${x}:${y}`;
                cells[getNumberInArrayBy(x, y)] = td;
            }
        }
        document.getElementById('gameField').appendChild(table);
    }
};