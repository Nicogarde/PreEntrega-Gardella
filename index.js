alert("Bienvenidos a Bomberos Voluntarios de Chivilcoy");

const clientes = []
let recaudado = 0

function registrar() {

    const consulta = prompt("¿Desea comprar una rifa o hacerse socio? \n 1-rifa \n 2-socio");

    function saludo() {
        alert("Muchas gracias" + " " + nombreYapellido + " " + "por colaborar con nosotros");
        console.log(clientes);
    }

    let nombreYapellido = ""
    let telefono = ""

    switch (consulta) {
        case "rifa":
            nombreYapellido = prompt("Ingrese su nombre y apellido");
            telefono = prompt("Ingrese su numero de con codigo de area");
            break;

        case "socio":
            nombreYapellido = prompt("Porfavor ingrese su nombre y apellido");
            telefono = prompt("Porfavor ingrese su numero con codigo de area");
            direccion = prompt("Porfavor ingrese su direccion");
            break;

        case "no":
            alert("Muchas gracias por visitar nuestro sitio web");
            break;

        default:
            alert("Porfavor indique Rifa o Socio");
            break;
    }

    let donacion = prompt("¿Desea colaborar con nosotros con algun tipo de donación? Si su respuesta es no escriban fin");

    let mail = "";

    let nuevoCliente = {
        nombre: nombreYapellido,
        telefono: telefono,
        socio: false,
        rifa: true
    };
    clientes.push(nuevoCliente);
    donarDinero()
    saludo()

    let nuevoSocio = {
        nombre: nombreYapellido,
        telefono: telefono,
        direccion: direccion,
        socio: true,
        rifa: false
    };
    clientes.push(nuevoSocio);
    donarDinero()
    saludo()

    while (mail === "") {
        mail = prompt("Porfavor dejenos su e-mail para contactarnos");
        alert("¡¡MUCHAS GRACIAS!! A la brevedad nuestra administración se pondra en contacto con usted");
        let registrarOtroUsario = prompt("¿Desea registrar otro usuario? si/no");
        if (registrarOtroUsario == "si") {
            registrar()
        } else {
            alert("Gracias por visitar nuestra pagina")
        }
    }

    console.log("Fin del while");
}

function donacion(numero) {
    recaudado = recaudado += numero
    console.log(recaudado)
}

function donarDinero() {
    let donar = prompt("¿Desea donar dinero? si/no")
    if (donar == "si") {
        let cantidad = parseInt(prompt("Escriba el monto que desea donar"));
        donacion(cantidad)
    } else {
        alert("Gracias por tu tiempo")
    }
}

registrar()



