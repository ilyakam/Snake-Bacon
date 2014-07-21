var size = new Pos(20, 20);

function Pos (x, y) {
  this.x = x;
  this.y = y;
  this.equals = function(p) {
    return this.x === p.x && this.y === p.y;
  }
  this.add = function(p) {
    return new Pos(
      (this.x + p.x + size.x) % size.x,
      (this.y + p.y + size.y) % size.y)
  }
}

randomPos = function() {
  return new Pos(
    Math.floor(Math.random() * size.x),
    Math.floor(Math.random() * size.y))
}

// TODO: Protect against flipping left/right and up/down:
function headLeft(pos) {
  return new Pos(-1, 0)
}

function headRight(pos) {
  return new Pos(1, 0)
}

function headUp(pos) {
  return new Pos(0, -1)
}

function headDown(pos) {
  return new Pos(0, 1)
}
