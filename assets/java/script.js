var Btn = document.getElementById("submitBtn")

Btn.addEventListener("click", handleClick)

function handleClick(){

    var tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0]
    tabla.innerHTML=""
    var fila = tabla.insertRow(tabla.rows.length)

    var nombre = document.getElementById("nombre").value
    var edad = document.getElementById("edad").value
    var dni = document.getElementById("dni").value
    var cont = document.getElementById("cont").value
    var fc = document.getElementById("fc").value

    var dt = [nombre, edad, dni, cont, fc]
    
    let i = 0;
    for (;i < dt.length; i++) {
        let columna = fila.insertCell(i)
        columna.innerHTML = dt[i]
    }
    document.getElementsByTagName("form")[0].reset()
}