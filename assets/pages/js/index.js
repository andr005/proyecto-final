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
  
  const header = document.getElementById("header");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");
//Menu responive
if (menuOpen) {
  menuOpen.addEventListener("click", () => {
    navMenu.classList.add("header__nav--visible");
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    navMenu.classList.remove("header__nav--visible");
  });
}