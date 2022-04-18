(() => {
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
    let htmlMarkup = '';
    area.forEach((row) => {
      htmlMarkup = htmlMarkup + '<div class="row">'
      row.forEach((item) => {
        htmlMarkup = htmlMarkup + '<div class="column">'
        if (item === 1) {
          htmlMarkup = htmlMarkup + '<img class="trees" src="images/trees.png">'; 
        } else if (item === 3) {
          htmlMarkup = htmlMarkup + '<img class="rider" src="images/rider.png">';
          getLocation(field);
        }
        htmlMarkup = htmlMarkup + '</div>'
      });
      htmlMarkup = htmlMarkup + '</div>';
    });
    return htmlMarkup;
  };

  function getResult() {
    document.getElementById('area').innerHTML = render(field);
    console.log(x);
    console.log(y);
  };
  
  getResult();
  
  function moveRight() {
    if (y < field[0].length - 1) {
      if (field[x][y + 1] != 1) {
        field[x][y] = 0;
        field[x][y + 1] = 3;
        getResult();
      }
    }
  }
  
  function moveDown() {
    if (x < field.length - 1) {
      if (field[x + 1][y] != 1) {
        field[x][y] = 0;
        field[x + 1][y] = 3;
        getResult();
      }
    }
  }
  
  function moveUp() {
    if (x >= !field.length.value) {
      if (field[x - 1][y] != 1) {
        field[x][y] = 0;
        field[x - 1][y] = 3;
        getResult();
      }
    }
  }
  
  function moveLeft() {
    if (y >= !field.length.value) {
      if(field[x][y - 1] != 1) { 
        field[x][y] = 0;
        field[x][y - 1] = 3;
        getResult();
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
})();