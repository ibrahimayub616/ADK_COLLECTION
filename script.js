```javascript
// ======================================
// ADK COLLECTION
// ======================================


// Shopping cart
let cart = [];


// ======================================
// ADD PRODUCT TO CART
// ======================================

function addToCart(name, price) {

    const product = {
        name: name,
        price: price
    };

    cart.push(product);

    updateCart();

    alert(name + " has been added to your cart!");
}


// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    // Number of products
    cartCount.textContent = cart.length;


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartTotal.textContent = "KES 0";

        return;
    }


    // Clear cart display
    cartItems.innerHTML = "";


    let total = 0;


    // Display products
    cart.forEach(function(product, index) {

        total += product.price;


        const item =
            document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <div>
                <h4>${product.name}</h4>

                <p>
                    KES ${product.price.toLocaleString()}
                </p>
            </div>

            <button
                class="remove-button"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>
        `;


        cartItems.appendChild(item);

    });


    // Total
    cartTotal.textContent =
        "KES " + total.toLocaleString();
}


// ======================================
// REMOVE PRODUCT
// ======================================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// ======================================
// OPEN CART
// ======================================

function openCart() {

    const modal =
        document.getElementById("cart-modal");

    modal.style.display = "flex";
}


// ======================================
// CLOSE CART
// ======================================

function closeCart() {

    const modal =
        document.getElementById("cart-modal");

    modal.style.display = "none";
}


// ======================================
// SEARCH PRODUCTS
// ======================================

function searchProducts() {

    const searchInput =
        document.getElementById("search");

    const searchText =
        searchInput.value.toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const productName =
            product
                .querySelector("h3")
                .textContent
                .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ======================================
// FILTER PRODUCTS
// ======================================

function filterProducts() {

    const filter =
        document.getElementById("category-filter").value;


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const category =
            product.getAttribute("data-category");


        if (
            filter === "all" ||
            category === filter
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ======================================
// CHECKOUT THROUGH WHATSAPP
// ======================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let message =
        "Hello ADK COLLECTION! I would like to order:%0A%0A";


    let total = 0;


    cart.forEach(function(product) {

        message +=
            "• " +
            product.name +
            " - KES " +
            product.price.toLocaleString() +
            "%0A";


        total += product.price;

    });


    message +=
        "%0ATotal: KES " +
        total.toLocaleString();


    // ADK COLLECTION WhatsApp number
    const phoneNumber =
        "254725258331";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ======================================
// CLOSE CART WHEN CLICKING OUTSIDE
// ======================================

window.onclick = function(event) {

    const modal =
        document.getElementById("cart-modal");


    if (event.target === modal) {

        closeCart();

    }

};
```