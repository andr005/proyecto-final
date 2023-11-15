function enviarResena() {
    
    var nombre = document.getElementById("nombre").value;
    var resena = document.getElementById("resena").value;

    
    if (nombre.trim() === "" || resena.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

  
    var nuevaResena = document.createElement("div");
    nuevaResena.innerHTML = "<strong>" + nombre + ":</strong> " + resena;

    
    document.getElementById("reseñas").appendChild(nuevaResena);

    document.getElementById("nombre").value = "";
    document.getElementById("resena").value = "";
  }