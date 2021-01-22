function Cell(x, y) {

  var t = 50; // taille d'un cote d'une cellule 
  this.x = x;
  this.y = y;
  this.isLight = false;
  this.light = 10;
  this.actual = false;


  this.color = function() {
    var x = this.x * t;
    var y = this.y * t;
    stroke(51);
    fill(255, 0, 0, this.light);
    rect(x, y, t, t);
  }


  this.show = function() {
    var x = this.x * t;
    var y = this.y * t;


    stroke(51);
    fill(255, 0, 0, this.light);
    rect(x, y, t, t);

    if (this.isLight === true) {

      this.light = this.light + 10;
      // fill(255, 0, 0, this.light);


      this.isLight = false;
    }

    if (this.actual === true) {

      fill(255, 125, 255);
      rect(x, y, t, t);

    }
  }


  this.checkVoisins = function(s) {
    var target, h;
    var x = this.x * t;
    var y = this.y * t;


    for (var i = 0; i < 4; i++) {


      switch (s) {
        case 1: //dessus
          h = (this.x + (this.y - i) * colonne);
          break;

        case 2: //droite
          h = ((this.x + i) + this.y * colonne);
          break;

        case 3: //bas
          h = (this.x + (this.y + i) * colonne);
          break;

        case 4: //gauche
          h = ((this.x - i) + this.y * colonne);
          break;

      }
      //console.log(h);
      target = grid[h];
      if (h < 400 && h >= 0) {
        target.isLight = true;
      }


    }

  }

}