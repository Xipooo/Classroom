const someNumbers = [5, 9, 21, 2];

const newNumbers = [...someNumbers, 17];

console.log(newNumbers);

const person = {
    name: "Jess",
    age: 42
}

const newPerson = {...person};
console.log(newPerson);

const tyler = {...person, name: "Tyler"}
console.log(newPerson);
console.log(tyler);