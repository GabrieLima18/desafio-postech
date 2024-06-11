function button_action() {

    let body = {
        names: [],
        message: document.getElementById('group_history').value
    }
    body.names.push(document.getElementById('name_one').value);
    body.names.push(document.getElementById('name_two').value);


    fetch("https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}