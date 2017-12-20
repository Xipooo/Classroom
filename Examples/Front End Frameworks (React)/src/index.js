const numbers = [72, 9, 16, 3];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for (let i in numbers){
    console.log(numbers[i]);
}

for (let number of numbers){
    console.log(number);
}