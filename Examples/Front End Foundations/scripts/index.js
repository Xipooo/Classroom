(() => {
    let age = 18;
    let verified = false;

    const isOldEnough = 
    age >= 18
        ? verified 
            ? "Welcome to our site."
            : "Sorry but you must be verified" 
        : "Sorry, you must be 18 or older!";

    console.log(isOldEnough);
})();