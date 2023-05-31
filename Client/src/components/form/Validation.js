export default function validation(input) {
    // input == {email:---, password:----}
    const error = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword= new RegExp ("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un mail valido";
    };
    if(!input.email) {
        error.email = "Debe ingresar un nombre!";
    };

    if(input.email.length > 35) {
        error.email = "No mayor a 35 caracteres!"
    };

    if(!regexPassword.test(input.password)) {
        error.password = "Al menos un numero!"
    };
    
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Entre 6 y 10 caracteres!"
    };

    return error;
}

//* Esta funcion validation sirve para validar los datos ingresados en los imputs email y password.
//* si alguna de las condiciones no se cumple en alguno de los inputs los mensajes se mostraran advirtiendo esto
//*Al final se devuelve el objeto error creado al principio de la funcion con los errores o sin nada si todo lo ingresado es
//*correcto.