function setup() {
    createCanvas(400, 400);
    cells.push(new Cell);
    cells.push(new Cell);
}

function draw(){
    background(51);
    for(let i = 0 ; i < cells.length ; i ++) {
    cells[i].move();
    cells[i].show();
    }
}

