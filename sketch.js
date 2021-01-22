var grid = []; // tableau avec tout les cellules 
var t = 50;
var current, x, y, s, m, pat;
var k = 0;


function setup() {

  //frameRate(25); //gere le nombre d'images par seconde
  createCanvas(1001, 1001); //gere la taille de la fenetre
  colonne = floor(width / t);
  ligne = floor(height / t);
  x = 0;
  y = 0;
  m = 0;
  pat = 0;


  for (var y = 0; y < ligne; y++) {
    for (var x = 0; x < colonne; x++) {
      var cell = new Cell(x, y);
      cell.color();
      grid.push(cell); //place la cellule(x,y) dans la liste grid
    }
  }
  current = grid[0]; //defini la cellule en haut à gauche(grid[0]) comme point de depart

}

function draw() {
  background(51);
  for (var j = 0; j < grid.length; j++) {
    grid[j].show();
  }
  current.actual = false
  switch (pat) {
    ////////////////////////////////////////////////////////    
    case 0:
      switch (m) {
        case 0:
          if (k < 19) {
            k++;
            s = 3;
          } else {
            m = 1;
          }
          break;

        case 1:
          if (k < 109) {
            k = k + colonne;
            s = 4;
          } else {
            m = 2;
          }
          break;

        case 2:
          if (k > 100) {
            k--;
            s = 1;
          } else {
            m = 3;
          }
          break;

        case 3:
          if (k < 190) {
            k = k + colonne;
            s = 2;
          } else {
            m = 4;
          }
          break;

        case 4:
          if (k < 219) {
            k++;
            s = 3;
          } else {
            m = 5;
          }
          break;

        case 5:
          if (k < 309) {
            k = k + colonne;
            s = 4;
          } else {
            m = 6;
          }
          break;

        case 6:
          if (k > 300) {
            k--;
            s = 1;
          } else {
            m = 7;
          }
          break;

        case 7:
          if (k < 330) {
            k = k + colonne;
            s = 2;
          } else {
            m = 8;
          }
          break;

        case 8:
          if (k < 359) {
            k++;
            s = 3;
          } else {
            m = 9;
          }
          break;

        case 9:
          if (k > 29) {
            k = k - colonne;
            s = 4;
          } else {
            m = 10;
          }
          break;

        case 10:
          if (k > 0) {
            k--;
            s = 3;
          } else {
            m = 0;
          }
          break;
      }
      break;
      ////////////////////////////////////////////////////////  
    case 1:
      switch (m) {
        case 0:
          if (k < colonne * 19) {
            k = k + colonne;
            s = 2;
          } else {
            m = 1;
          }
          break;

        case 1:
          if (k < colonne * 19 + 7) {
            k++;
            s = 1;
          } else {
            m = 2;
          }
          break;

        case 2:
          if (k > 7) {
            k = k - colonne;
            s = 4;
          } else {
            m = 3;
          }
          break;

        case 3:
          if (k < 7 + 1) {
            k++;
            s = 3;
          } else {
            m = 4;
          }
          break;

        case 4:
          if (k < colonne * 19 + 7 + 1) {
            k = k + colonne;
            s = 2;
          } else {
            m = 5;
          }
          break;

        case 5:
          if (k < colonne * 19 + 7 * 2 + 1) {
            k++;
            s = 1;
          } else {
            m = 6;
          }
          break;

        case 6:
          if (k > 7 * 2 + 1) {
            k = k - colonne;
            s = 4;
          } else {
            m = 7;
          }
          break;

        case 7:
          if (k < 7 * 2 + 1 * 2) {
            k++;
            s = 3;
          } else {
            m = 8;
          }
          break;

        case 8:
          if (k < colonne * 19 + 7 * 2 + 1 * 2) {
            k = k + colonne;
            s = 2;
          } else {
            m = 9;
          }
          break;

        case 9:
          if (k < colonne * 19 + 7 * 2 + 1 * 2 + 3) {
            k++;
            s = 1;
          } else {
            m = 10;
          }
          break;

        case 10:
          if (k > 7 * 2 + 1 * 2 + 3) {
            k = k - colonne;
            s = 4;
          } else {
            m = 11;
          }
          break;

        case 11:
          if (k > 0) {
            k--;
            s = 3;
          } else {
            m = 0;
          }
          break;
      }
      break;
      ////////////////////////////////////////////////////////    
  }

  console.log(k);
  current.checkVoisins(s);
  current = grid[k];
  current.actual = true;


}