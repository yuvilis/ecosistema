document.getElementById("registrarse").addEventListener("click", function(event) {
    event.preventDefault();
    
        let usuario = document.getElementById("usuario").value.trim();
        let contraseña = document.getElementById("contraseña").value.trim();
        let confirmar = document.getElementById("confirmar").value.trim();
        
        if (usuario === "" || contraseña === "" || confirmar === "") {
            alert("para registrarte tienes que ingresar los datos");
            return;
        }

        if (contraseña !== confirmar) {
            alert("Las contraseñas no son iguales por favor verifica que escribiste lo mismo en la confirmacion de contraseña");
            return;
        }
    
        window.location.href = "../sesion/sesion.html";
    });