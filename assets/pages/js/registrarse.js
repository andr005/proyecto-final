document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;
  var genero = document.getElementById('genero').value;

  var usuario = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      contrasena: contrasena,
      genero: genero
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));



  console.log('Información del usuario guardada en localStorage:', usuario);
});
