(function () {
    let midArray = [12, 13];
    let normArray = [1, 2, 3, ...midArray, 4, 5];

    console.log(normArray);

    let arr = ["a", "b", "c", "d"];
    let arr2 = ["e", "f", "g", "h"];

    let arr3 = [...arr, ...arr2];
    console.log(arr3);

    let obj1 = { name: "John", age: 29};
    let obj2 = { name: "Alice", email: "alice@email.com"};

    let copyObj = { ...obj1 };

    let mergeObj = { ...obj1, ...obj2 };

    console.log(mergeObj);
})();