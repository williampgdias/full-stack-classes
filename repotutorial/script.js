const form = document.getElementById('mySecondForm');

form.addEventListener('click', function(e) {
    e.preventDefault();

    const person = {
        name: e.target[0]. value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        mobile: e.target[3].value
    };

    console.log(person);
}) 