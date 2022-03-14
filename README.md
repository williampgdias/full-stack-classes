# Docs
2022-04 

## db

* db: williamdatabase
* user: william
* pass: william

## Ajax Request 

### jQuery Ajax

```js
$.ajax({

    url: "http://localhost:3000/api/person",
    method: "post",
    data: person1

}).done(function (responseFromServer) {

    // just log the response from server
    console.log("Server Response: ", responseFromServer);

}).fail(e => console.log("error: ", e));

```

### Pure js Ajax

```js
var http = new XMLHttpRequest();  
http.open('POST', "http://localhost:3000/api/person", true); 
http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

http.onreadystatechange = function() { 
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}

http.send(JSON.stringify(person1));
```