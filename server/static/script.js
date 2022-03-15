const form = document.querySelector("#myFirstForm");

form.addEventListener("submit", function(e) {
    // first step
    e.preventDefault();

    // second step
    const person1 = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        mobile: e.target[3].value,
    };

    // 3rd step: send person data to the API (using Ajax)
    $.ajax({

        url: "http://localhost:3000/api/person",
        method: "post",
        data: person1

    }).done(function (responseFromServer) {

        // just log the response from server
        console.log("Server Response: ", responseFromServer);

    }).fail(e => console.log("error: ", e));

 
 

});
