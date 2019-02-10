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

  allergicTo(allergy) {
    if (this.score === 0) {
      return false;
    }

    for (let key in this.allergyList) {
      if(key == this.score) {
        return true;
      }
    }

    if(!Object.keys(this.allergyList).includes(this.score.toString())) {
      let allergyKey = Object.keys(this.allergyList).find(key => this.allergyList[key] === allergy);
      if (allergyKey < this.score) {
        return true;
      } else {
        return false;
      }
    }
  }

  list() {
    let allergic = []
    const allergyListValues = Object.values(this.allergyList);

    for (let key in this.allergyList) {
      if(key == this.score) {
        allergic.push(this.allergyList[key]);
      }
    }

    if(!Object.keys(this.allergyList).includes(this.score.toString())) {

      let allergyScore = this.score;
      let keysArray = Object.keys(this.allergyList);

      while (allergyScore != 0) {
        let result = Math.max.apply(Math, keysArray.filter(function(x){return x <= allergyScore}));

        allergic.push(this.allergyList[result]);

        let index = keysArray.indexOf(result.toString());

        keysArray.splice(index, 1);
        allergyScore = allergyScore - result;
      }
    }

    return allergic.filter(item => item).sort(function(a, b){
      return allergyListValues.indexOf(a) - allergyListValues.indexOf(b);
    });
  }
}

export default Allergies
