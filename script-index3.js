function validarFormulario(event) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("mail").value.trim();
    const contraseña1 = document.getElementById("contraseña").value;
    const contraseña2 = document.getElementById("repeat-contraseña").value;
    const checkboxTerminos = document.getElementById("checkbox-de-terminos");

    if (nombre === "" || apellido === "" || email === "" || contraseña1 === "" || contraseña2 === "") {
        alert("Los campos están vacíos");
        event.preventDefault(); // Este comando detiene el envío del formulario
        return false;
    }

    if (contraseña1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres."); 
        event.preventDefault(); 
        return false;
    }

    if (contraseña1 !== contraseña2) {
        alert("Las contraseñas no coinciden. Ingrésalas de nuevo.");
        event.preventDefault();
        return false;
    }

    if (!checkboxTerminos.checked) {
        alert("Debes aceptar los términos y condiciones para continuar."); 
        event.preventDefault();
        return false;
    }

    return true;
}

const formulario = document.getElementById("register-form");
formulario.onsubmit = validarFormulario;

