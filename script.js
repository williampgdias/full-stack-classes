const form = document.querySelector("#myFirstForm");

form.addEventListener("submit", function(e) {
    // first step
    e.preventDefault();

    // second step
    const person = {
        name: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        mobile: e.target[3].value,
    };

    console.log(person);
});