function isEnough(value){
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isEnough);

console.log(filtered);