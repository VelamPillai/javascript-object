let printSym = () => console.log("\n**********************************\n  ");
// ex 1

let getVoteCount = (voteObj) =>
  voteObj.upVotes > voteObj.downVotes
    ? voteObj.upVotes - voteObj.downVotes
    : "downVotes are incorrect";

console.log(getVoteCount({ upVotes: 15, downVotes: 10 }));
console.log(getVoteCount({ upVotes: 2, downVotes: 33 }));
console.log(getVoteCount({ upVotes: 132, downVotes: 132 }));
printSym();

//ex 2

let volumeOfBox = (arg) => arg.width * arg.height * arg.length1;

console.log(
  `volumeOfBox({ width: 2, length1: 5, height: 1 } ): ${volumeOfBox({
    width: 2,
    length1: 5,
    height: 1,
  })}`
);
console.log(volumeOfBox({ width: 4, length1: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length1: 3, height: 5 }));

printSym();

// ex 3

const personRelationship = {
  father: "Darth Vader",
  sister: "Leia",
  "brother in law": "Han",
  droid: "R2D2",
};

const relationToLuke = (str, obj) => {
  for (let key in obj) {
    if (obj[key] == str) {
      return `Luke , I am your ${key}.`;
    }
  }
  return `Sorry , I am not your relative`;
};
console.log(relationToLuke("Darth Vader", personRelationship));
console.log(relationToLuke("Leia", personRelationship));
console.log(relationToLuke("Han", personRelationship));

printSym();

// EX 4 SPORTS PLAYER

let footballPlayer = {
  age: 31,
  height: 180,
  weight: 75,
  getAge(name) {
    console.log(`${name} is age ${this.age}`);
  },

  getHeight(name) {
    console.log(`${name} is height ${this.height} cm`);
  },

  getWeight(name) {
    console.log(`${name} is weight ${this.weight} kg`);
  },
};
footballPlayer.getAge("Ashu");
footballPlayer.getWeight("Ashu");
footballPlayer.getHeight("Ashu");
