const Example = {
    x: 81,
    add: function() {
        return this.x + 1;
    }
}

const traditionalResult = Example.add();
console.log(traditionalResult);

const Example2 = {
    x: 81,
    add: (x) => x + 1
}
const arrowResult = Example2.add(99);
console.log(arrowResult);