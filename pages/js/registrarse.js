function guardarInformacion() {
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var genero = document.getElementById("genero").value;

    var datos = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      contrasena: contrasena,
      genero: genero
    };

    localStorage.setItem('datosFormulario', JSON.stringify(datos));

   
    alert('Datos guardados en localStorage');
  }
