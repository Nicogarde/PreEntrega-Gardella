alert("Bienvenidos a Bomberos Voluntarios de Chivilcoy");

const consulta = prompt("¿Desea comprar una rifa o hacerse socio?");
function saludo() {
    alert("Muchas gracias" + " " + nombreYapellido + " " + "por colaborar con nosotros");
}

switch (consulta) {
    case "rifa":
        nombreYapellido = prompt("Ingrese su nombre y apellido");
        telefono = prompt("Ingrese su numero de con codigo de area");
        saludo()
        break;

    case "socio":
        nombreYapellido = prompt("Porfavor ingrese su nombre y apellido");
        telefono = prompt("Porfavor ingrese su numero con codigo de area");
        direccion = prompt("Porfavor ingrese su direccion");
        saludo()
        break;

    case "no":
        alert("Muchas gracias por visitar nuestro sitio web");
        break;

    default:
        alert("Porfavor indique Rifa o Socio");
        break;
}

let donacion = prompt("¿Desea colaborar con nosotros con algun tipo de donación? Si su respuesta es no escriban fin");


while(donacion != "fin"){
    telefono = prompt("Porfavor dejenos su numero de telefono con el codigo de area");
    alert("¡¡MUCHAS GRACIAS!! A la brevedad nuestra administración se pondra en contacto con usted");
}

console.log("Fin del while");


