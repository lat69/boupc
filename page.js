var cart = [];

function addToCart(product, price) {
    var item = {
        product: product,
        price: price
    };
    cart.push(item);
}

function showCart() {
    var cartItems = "";
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        cartItems += cart[i].product + " - $" + cart[i].price + "<br>";
        total += cart[i].price;
    }
    document.getElementById("cart").innerHTML = cartItems;
    document.getElementById("total").innerHTML = "Total: $" + total;
}

var addToCartButtons = document.querySelectorAll(".add-to-cart");

for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function () {
        var product = this.parentElement.querySelector("h3").innerHTML;
        var price = parseFloat(this.parentElement.querySelector("p").innerHTML.slice(1));
        addToCart(product, price);
        showCart();
    });
}