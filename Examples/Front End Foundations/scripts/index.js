var nameOutro = ".";
(function () {
    function popularName(firstName) {
        const nameIntro = "The popular name is ";
        function lastName(aLastName) {
            return nameIntro + firstName + " " + aLastName + nameOutro;
        }
        return lastName;
    }

    let aPopularName = popularName("Andrew");
    console.log(aPopularName("Jackson"));

})();