var closebtn = document.getElementsByClassName("close");
var users = {
    name: []
};
function MyList() {

    let item = document.getElementById("input").value;

    let text = document.createTextNode(item);

    let li = document.createElement("li");

    li.appendChild(text);
    users.name.push(item);
    console.log(users);

    if (item === '') {

        alert("You must write something in the List!");

    }

    else {

        document.getElementById("myOL").appendChild(li);

    }

    document.getElementById("input").value = "";// This is for  refreshing the input .

    var span = document.createElement("SPAN");

    var symbol = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(symbol);

    li.appendChild(span);

    // Removing Items when click on close button
    for (i = 0; i < closebtn.length; i++) {

        closebtn[i].onclick = function () {

            var div = this.parentElement;

            div.style.display = "none";

        }
    }
}
function save() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("POST", "http://localhost:3000/UserPost");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(users));

}