let num = Number(prompt("Enter a number for its table:"));
let table = document.getElementById("Table");
table.innerHTML = "<h3> Table of " + num + ":</h3>"
for (let i = 1; i <= 10; i++) {
    table.innerHTML += num +" " + " x " +" " + i +" " + " = " +" "+ (num * i) + "<br>"

}