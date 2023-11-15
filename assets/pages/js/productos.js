const valorTotal = document.getElementById("total");
let sumPrecios = 0;

function agregarProductoCarrito(id){
    const nombreProducto = document.getElementById(`nom-product-${id}`);
    const precioProducto = document.getElementById(`precio-product-${id}`);
    const listaCarrito = document.getElementById("carrito-lista")

    let itemList = document.createElement("li");
    itemList.innerHTML = `<strong>Nombre Producto:</strong>${nombreProducto.textContent} <br><strong>Precio:</strong>$${precioProducto.textContent}`

    listaCarrito.appendChild(itemList);

    console.log(parseInt(precioProducto.textContent));
    sumPrecios = sumPrecios + parseInt(precioProducto.textContent);
    valorTotal.textContent = `${sumPrecios}`;
}