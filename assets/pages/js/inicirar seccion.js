document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var usuario = {
        name: name,
        email: email,
        pass: pass
    };

    
    localStorage.setItem('usuario', JSON.stringify(usuario));


    console.log('Usuario registrado:', usuario);
});