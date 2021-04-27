class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }

  perimeter() {
    return this.lengths.reduce((total, lengthOfSide) => total + lengthOfSide);
  }
}
