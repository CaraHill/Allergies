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
    console.log(this.score)
    if(!Object.keys(this.allergyList).includes(this.score)) {
      let scoreArray = Object.keys(this.allergyList).filter(number => number < this.score);
      scoreArray.forEach(number => {
        if (Object.keys(this.allergyList).includes(number)) {
          allergic.push(this.allergyList[number]);
        }
      });
    }

    return allergic;
  }
}

export default Allergies
