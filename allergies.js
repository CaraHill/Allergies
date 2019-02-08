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

    if(!Object.keys(this.allergyList).includes(this.score.toString())) {

      let allergyScore = this.score;
      let keysArray = Object.keys(this.allergyList);
      let countArray = Object.keys(this.allergyList).filter(number => number < this.score);

      for (let i = 0; i < countArray.length; i++) {
        let result = Math.max.apply(Math, keysArray.filter(function(x){return x <= allergyScore}));

        allergic.push(this.allergyList[result]);

        let index = keysArray.indexOf(result.toString());

        keysArray.splice(index, 1);
        allergyScore = allergyScore - result;

      }
    }

    return allergic.sort().filter(item => item);
  }
}

export default Allergies
