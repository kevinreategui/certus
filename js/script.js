let VarGlobal1 = "texto de variable global";

function FCambioColor() {
    let varTemporal = "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");

    vTexto1.textContent = "Texto cambiado por funcion FCambioColor()";
    vTexto1.style.color = "red";
    vTexto1.style.backgroundColor = "green";

    vTexto1.insertAdjacentHTML("beforeEnd", "<br>Este texto es adicional <br>");
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    vTexto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");

    console.log("Texto por consola");
}

// Prueba fuera de la función
let vTexto1 = "Texto fuera de funcion"; // vTexto1 no es la variable de la función
console.log(vTexto1);
console.log(typeof varTemporal === "undefined" ? "varTemporal no está definido afuera de la función" : varTemporal);
