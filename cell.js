const cells = [];

function Cell(pos, r, c) {
    this.pos = pos ? pos.copy() : createVector(random(width), random(height));
    this.r = r || 60;
    this.c = c || color(random(100, 255, 0.5), 0, random(100, 255, 0.5));

    this.move = function() {
        let vel = p5.Vector.random2D();
        this.pos.add(vel);
    }

    this.clicked = function(x, y) {
        let d = dist(this.pos.x, this.pos.y, x , y);
        return d < this.r 
    }

    this.mitoses = function() {
        /* this.pos.x = random(this.r, this.r ); */
        let cell = new Cell(this.pos, this.r * .8 , this.c);
        return cell
        }

    this.show = function() {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
};

function mousePressed() {
    for(let i = cells.length -1 ; i >= 0 ; i--) {
        if(cells[i].clicked(mouseX, mouseY)){
            let cellA = cells[i].mitoses();
            let cellB = cells[i].mitoses();
            cells.push(cellA);
            cells.push(cellB);
            cells.splice(cells, i)
        }
        }
    }