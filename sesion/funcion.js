document.getElementById("enter").addEventListener("click", function(event) {
event.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    
    if (usuario === "" || contraseña === "") {
        alert("para entrar tienes que ingresar los datos");
        return;
    }

    window.location.href = "../inicio/inicio.html";
});


document.getElementById("registro").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../registrar/registrar.html";
});


