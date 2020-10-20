let i = 1

do {
  console.log(i);
  i++;
} while (i <= 100);

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

for (let key of Object.keys(person)) {
  console.log(key);
}

for (let [key,value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "Feb 23, 1930",
    gender: "male"
  },
  {
    firstName: "Jill",
    lastName: "Doe",
    birthDate: "June 14, 1991",
    gender: "female"
  }
]

for (let person of arrayOfPersons) {
  let birthSplit = person.birthDate.split(" ");
  let lastIndex = birthSplit.length - 1;
  if (parseInt(birthSplit[lastIndex]) % 2 !== 0) {
    console.log(person.birthDate);
  }
}

arrayOfPersons.map(friend => console.log(friend));

arrayOfPersons.filter(friend => {
  if (friend.gender === "male") {
    console.log(friend);
  }
});


const oldPeople = (array) => {
  for (let person of arrayOfPersons) {
    let birthSplit = person.birthDate.split(" ");
    let lastIndex = birthSplit.length - 1;
    if (parseInt(birthSplit[lastIndex]) < 1990) {
      return true;
    }
  }
}

arrayOfPersons.filter(friend => {
  let birthSplit = friend.birthDate.split(" ");
  let lastIndex = birthSplit.length - 1;
  if (parseInt(birthSplit[lastIndex]) < 1990) {
    console.log(friend);
  }
});