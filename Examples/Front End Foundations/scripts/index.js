(() => {

    try {
        alert("Start of code");

        //randomVariable;

        alert("End of code");
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        alert("Finally was ran");
    }

})();

(() =>
{
    alert("This is my other function");
})()