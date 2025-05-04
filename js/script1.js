function FCapturarNombre() {
    let resumen = "";

    // Captura nombre, apellido y edad
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    resumen += `Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\n`;

    // Captura estatura seleccionada
    const estatura = document.getElementById("estatura").value;
    resumen += `Estatura: ${estatura}\n`;

    // Captura cursos seleccionados
    const cursos = document.querySelectorAll('input[name="cursos"]:checked');
    resumen += "Cursos Llevados:\n";
    cursos.forEach(curso => {
        resumen += ` - ${curso.value}\n`;
    });

    // Captura ciclo seleccionado
    const ciclo = document.querySelector('input[name="ciclo"]:checked');
    if (ciclo) {
        resumen += `Ciclo Actual: ${ciclo.value}\n`;
    }

    // Captura fecha
    const fecha = document.getElementById("fecha").value;
    resumen += `Fecha seleccionada: ${fecha}\n`;

    // Captura clave
    const clave = document.getElementById("clave").value;
    resumen += `Clave: ${clave}\n`;

    // Mostrar en textarea
    document.getElementById("observacion").value = resumen;

    // Opcional: mostrar en consola también
    console.log(resumen);
}
/*advertencia*/
function validarClave() {
    const clave = document.getElementById("clave");
    const advertencia = document.getElementById("advertenciaClave");

    // Verifica si la longitud de la clave es exactamente 5
    if (clave.value.length !== 5) {
        advertencia.style.display = "block"; // Muestra la advertencia
    } else {
        advertencia.style.display = "none"; // Oculta la advertencia si es correcta
    }
}

/*dom*/
// Variable global compartida
let VarGlobal1 = "texto de variable global";
window.vTexto1 = "";

// Función para cambiar color y texto
function FCambioColor() {
    let vTexto1 = document.getElementById("ejmDOM1");

    vTexto1.textContent = "Texto cambiado por función FCambioColor()";
    vTexto1.style.color = "red";
    vTexto1.style.backgroundColor = "green";

    vTexto1.insertAdjacentHTML("beforeEnd", "<br>Este texto es adicional <br>");
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    vTexto1.insertAdjacentHTML("afterend", "Texto adicional <br><br>");

    console.log("Texto por consola");
}

// Función para mostrar tipo de variable y concatenar texto
function FAgregarTextoPermanente() {
    let textoAdicional = "\nTexto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("Tipo de variable de vTexto1 =", typeof vTexto1);
    console.log(vTexto1);
}

// Función para cambiar contenido de clase classDOM1
function FCambioClase1() {
    let vTexto2 = document.getElementsByClassName("classDOM1");
    if (vTexto2.length > 0) {
        vTexto2[0].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
    }
    console.log("Tamaño del array=", vTexto2.length);
}

// Función para cambiar un elemento H2 por índice
function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    if (vTexto3.length > 11) {
        vTexto3[11].innerHTML = "Elemento h2 cambiado por TagDOM1";
    } else {
        console.log("No hay suficientes elementos h2.");
    }
}

// Crear dinámicamente un elemento H1
function fcrearH1() {
    var elemento = document.getElementById("idCrearH1");
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode("Texto colocado en línea");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
}
