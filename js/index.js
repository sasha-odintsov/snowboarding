const field = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

function render() { 
  htmlMarkup = '';
  field.forEach((row) => {
    htmlMarkup = htmlMarkup + '<div class="row">'
    row.forEach((item) => {
      htmlMarkup = htmlMarkup + '<div class="column">'
      if (item === 1) {
        htmlMarkup = htmlMarkup + '<img class="trees" src="images/trees.png">';
      } else if (item === 3) {
        htmlMarkup = htmlMarkup + '<img class="rider" src="images/rider.png">';
      }
      htmlMarkup = htmlMarkup + '</div>'
    });
    htmlMarkup = htmlMarkup + '</div>';
  });
  return htmlMarkup;
};
document.getElementById('area').innerHTML = render();



// let addRow = document.createElement('div');
// addRow.className = "field";
// addRow.innerHTML = "Hi!";

// let rider = document.createElement('img');
// rider.className = "rider";
// rider.setAttribute('src', 'images/rider.png');
// document.getElementById('area').appendChild(rider);

// let trees = document.createElement('img');
// trees.className = "trees";
// trees.setAttribute('src', 'images/trees.png');
// document.getElementById('area').appendChild(trees);

// function render() { 
//   field.forEach((row, indexRow) => {
//     let addRow = document.createElement('div');
//     addRow.className = "field";
//     document.getElementById('area').append(addRow);    
//     row.forEach((item, indexCol) => { 
//       if (elem === 1) { 
//         let trees = document.createElement('img');
//         trees.className = "trees";
//         trees.setAttribute('src', 'images/trees.png');
//         document.getElementById('area').appendChild(trees);
//       }
//     })
//     elem.forEach((elem) => { 
//       if (elem === 3) {
//         let rider = document.createElement('img');
//         rider.className = "rider";
//         rider.setAttribute('src', 'images/rider.png');
//         document.getElementById('area').appendChild(rider);
//       }
//     })  
//   });  
// }
// render();