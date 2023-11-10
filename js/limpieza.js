function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//************************************* */ carrito*********************

// Array de productos
var products = [
    { name: "Producto 1", image: "../assets/imagenes/lavarropas/1.jpg", price: 10 },
    { name: "Producto 2", image: "../assets/imagenes/lavarropas/2.jpg", price: 10 },
    { name: "Producto 3", image: "../assets/imagenes/lavarropas/3.jpg", price: 10 },
    { name: "Producto 3", image: "../assets/imagenes/lavarropas/4.jpg", price: 10 },
    { name: "Producto 3", image: "../assets/imagenes/lavarropas/5.jpg", price: 10 },
    { name: "Producto 3", image: "../assets/imagenes/lavarropas/6.jpg", price: 10 },
];

// Función para alternar la visibilidad del carrito de compras
function toggleCart() {
    var cart = document.getElementById("cart");
    cart.style.display = cart.style.display === "none" ? "block" : "none";
}

// Función para agregar un producto al carrito
function addToCart(index) {
    var product = products[index];
    var cartItems = document.getElementById("cart-items");
    var li = document.createElement("li");
    li.textContent = product.name + " - $" + product.price;
    cartItems.appendChild(li);
}

function ProductCard(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;

    this.insertProduct = function () {
        var productCard = document.getElementById("product");

        // Crea los elementos HTML para mostrar los detalles del producto
        var productName = document.createElement("h3");
        productName.textContent = this.name;

        var productPrice = document.createElement("p");
        productPrice.textContent = "Precio: $" + this.price;

        var productImage = document.createElement("img");
        productImage.src = this.image;

        // Inserta los elementos en la tarjeta "product"
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
    };
}

// productos nuevos
var producto1 = new ProductCard("Producto 1", 19.99, "./assets/imagenes/lavarropas/1.jpg");
producto1.insertProduct();

var producto2 = new ProductCard("Producto 2", 19.99, "./assets/imagenes/lavarropas/2.jpg");
producto2.insertProduct();

var producto2 = new ProductCard("Producto 3", 19.99, "./assets/imagenes/lavarropas/3.jpg");
producto2.insertProduct();

var producto2 = new ProductCard("Producto 4", 19.99, "./assets/imagenes/lavarropas/4.jpg");
producto2.insertProduct();

var producto2 = new ProductCard("Producto 5", 19.99, "./assets/imagenes/lavarropas/5.jpg");
producto2.insertProduct();

var producto2 = new ProductCard("Producto 6", 19.99, "./assets/imagenes/lavarropas/6.jpg");
producto2.insertProduct();
