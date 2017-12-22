const parameters = [4, 8, 2, 1, 6];

const maxWithoutSpread = 
    Math.max(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4]);

console.log(maxWithoutSpread);

const maxUsingSpread = Math.max(...parameters);

console.log(maxUsingSpread);

