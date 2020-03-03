class Food {
  constructor() {
    this.location = this.newLocation();
  }

  newLocation() {
    let x = floor(random(gridColumns));
    let y = floor(random(gridRows));

    // uzeti niz svih pozicija, obrisati sve pozicije zmije
    // pa nasumicno odabrati jednu poziciju iz niza
    return createVector(x, y);
  }

  eaten() {
    this.location = this.newLocation();
    // scroe counter ++
  }
}
