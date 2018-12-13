class Allergies {
  constructor(score) {
    this.score = score;
    this.allergyList = {
      1: "eggs",
      2: "peanuts",
      4: "shellfish",
      8: "strawberries",
      16: "tomatoes",
      32: "chocolate",
      64: "pollen",
      128: "cats"
    }
  }

  list() {
    let allergic = []

    for (let key in this.allergyList) {
      if(key == this.score) {
        allergic.push(this.allergyList[key]);
      }
    }

    return allergic;
  }
}

export default Allergies
