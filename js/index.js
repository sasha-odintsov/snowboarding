const field = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

let x = 0;
let y = 0;

function getLocation(div) { 
  div.map((row, indexRow) => {
    row.map((item, indexColumn) => {      
      if (item === 3) {
        x = indexRow;
        y = indexColumn;
      }; 
    });
  });
};

function render(area) { 
  htmlMarkup = '';
  area.forEach((row, indexRow) => {
    htmlMarkup = htmlMarkup + '<div class="row">'
    row.forEach((item, indexColumn) => {
      htmlMarkup = htmlMarkup + '<div class="column">'
      if (item === 1) {
        htmlMarkup = htmlMarkup + '<img class="trees" src="images/trees.png">'; 
      } else if (item === 3) {
        htmlMarkup = htmlMarkup + '<img class="rider" src="images/rider.png">';
        getLocation(field);
        // x = indexRow;
        // y = indexColumn;
      }
      htmlMarkup = htmlMarkup + '</div>'
    });
    htmlMarkup = htmlMarkup + '</div>';
  });
  return htmlMarkup;
};
document.getElementById('area').innerHTML = render(field);

console.log(x);
console.log(y);

const countColumns = field[0].length;
const countRows = field.length;

function moveRight() {
  if (y < countColumns - 1) {
    if (field[x][y + 1] != 1) {
      field[x][y] = 0;
      field[x][y + 1] = 3;
      document.getElementById('area').innerHTML = render(field); 
      console.log(x);
      console.log(y);
    }
  }
}

function moveDown() {
  if (x < countRows - 1) {
    if (field[x + 1][y] != 1) {
      field[x][y] = 0;
      field[x + 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
      console.log(x);
      console.log(y);
    }
  }
}

function moveUp() {
  if (x < countRows) {
    if (field[x - 1][y] != 1) {
      field[x][y] = 0;
      field[x - 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
      console.log(x);
      console.log(y);
    }
  }
}

function moveLeft() {
  if (y < countColumns) {
    if(field[x][y - 1] != 1) { 
      field[x][y] = 0;
      field[x][y - 1] = 3;
      document.getElementById('area').innerHTML = render(field); 
      console.log(x);
      console.log(y);
    }
  }
}

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    moveRight();
  }
  if (event.key === 'ArrowDown') {
    moveDown();
  }
  if (event.key === 'ArrowUp') {
    moveUp();    
  }
  if (event.key === 'ArrowLeft') {
    moveLeft();    
  }
});

document.querySelector('.controls__right').addEventListener(('click'), () => {
  moveRight();
});
document.querySelector('.controls__left').addEventListener(('click'), () => {
  moveLeft();   
});
document.querySelector('.controls__up').addEventListener(('click'), () => {
  moveUp();
});
document.querySelector('.controls__down').addEventListener(('click'), () => {
  moveDown();
});