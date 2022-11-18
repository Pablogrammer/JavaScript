function crear_tabla(filas='100', columnas='100') {
    let tabla = document.getElementById('tabla');

    for (let fila=0; fila < filas; fila++) {
        let fila = document.createElement("tr");
        for (let columna=0; columna<columnas; columna++) {
            let td = document.createElement("td");
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
}

let tabla = document.getElementById('tabla');


function cambia_color(element){
    if (element.ctrlKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'red';
        }
    }
    if (element.altKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'blue';
        }
    }
    if (element.shiftKey) {
        if (element.target.tagName.toLowerCase() == 'td') {
            element.target.style.backgroundColor = 'white';
        }
    }

}

function borrar(){
    let celdas = tabla.getElementsByTagName('td');
    for(i = 0; i<= celdas.length; i++){
        celdas[i].style.backgroundColor = 'white';
    }
}

tabla.addEventListener("mousemove",cambia_color);