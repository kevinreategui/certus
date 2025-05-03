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

function FCambioClase1() {
    let vTexto2 = document.getElementsByClassName("classDOM1");
    vTexto2[0].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
    console.log("Tamaño del array=", vTexto2.length);
    // se coloca el índice 1 por ser el 2do elemento de la clase classDOM1 de la pag web
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    vTexto3[10].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 6 por ser el 7mo elemento h2 de la pag web index.html
}

window.vTexto1 = "";
console.log("Texto fuera de funcion");

function FAgregarTextoPermanente() {
    let textoAdicional = "\nTexto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =", typeof vTexto1);
    console.log(vTexto1);
}
FAgregarTextoPermanente();