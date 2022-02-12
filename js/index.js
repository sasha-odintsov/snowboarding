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
        x = indexRow;
        y = indexColumn;
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

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowRight') {
    const countColumns = field[0].length;
    if (y < countColumns - 1) {      
      field[x][y] = 0;
      field[x][y + 1] = 3;
      document.getElementById('area').innerHTML = render(field); 
      console.log(x);
      console.log(y);
    }
  }
  if (event.key === 'ArrowDown') {
    const countRows = field.length;
    if (x < countRows - 1) {
      field[x][y] = 0;
      field[x + 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
      console.log(x);
      console.log(y);
    }
  }
  if (event.key === 'ArrowUp') {
    const countRows = field.length;
    if (x < countRows - 1) {
      field[x][y] = 0;
      field[x - 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
      console.log(x);
      console.log(y);
    }
  }
  if (event.key === 'ArrowLeft') {
    const countColumns = field[0].length;
    if (y < countColumns - 1) {
      field[x][y] = 0;
      field[x][y - 1] = 3;
      document.getElementById('area').innerHTML = render(field); 
      console.log(x);
      console.log(y);
    }
  }
});


document.querySelector('.controls__right').addEventListener(('click'), () => {
  const countColumns = field[0].length;
    if (y < countColumns - 1) {
      field[x][y] = 0;
      field[x][y + 1] = 3;
      document.getElementById('area').innerHTML = render(field);
    }
});
document.querySelector('.controls__left').addEventListener(('click'), () => {
  const countColumns = field[0].length;
    if (y < countColumns - 1) {
      field[x][y] = 0;
      field[x][y - 1] = 3;
      document.getElementById('area').innerHTML = render(field); 
    }
});
document.querySelector('.controls__up').addEventListener(('click'), () => {
  const countRows = field.length;
    if (x < countRows - 1) {
      field[x][y] = 0;
      field[x - 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
    }
});
document.querySelector('.controls__down').addEventListener(('click'), () => {
  const countRows = field.length;
    if (x < countRows - 1) {
      field[x][y] = 0;
      field[x + 1][y] = 3;
      document.getElementById('area').innerHTML = render(field);
    }
});