function createCartItem(name, price, quantity) {
    return {
        name,
        price,
        quantity
    };
}

// Function to add an item to the cart
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If the item exists, update the quantity
        existingItem.quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart
        const newItem = createCartItem(name, price, 1);
        cart.push(newItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display the updated cart
    displayCart();
}


// Function to display the cart
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const orderButton = document.getElementById('order-now-button');
    
    // Clear the cart items container
    cartItems.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            // Add HTML structure for the cart item, including the "Remove" button and quantity input
            cartItem.innerHTML = `
                <div class="box">
                    <img src="images/${item.name.replace(/ /g, '_')}.png" alt="">
                    <h3>${item.name}</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span>${item.price}</span>
                    <input type="number" value="${item.quantity}" min="1" id="quantity-input-${index}" onchange="updateQuantity(${index}, this.value)">
                    <a class="btn" onclick="removeFromCart(${index})">Remove</a>
                </div>
            `;

            cartItems.appendChild(cartItem);
        });

        // Show the "Order Now" button
        orderButton.style.display = 'block';
    } else {
        // Hide the "Order Now" button if the cart is empty
        orderButton.style.display = 'none';
    }
}


// Function to update the quantity of an item in the cart
function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Call the displayCart function when the cart.html page loads
displayCart();


function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart && cart.length > 0) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Reload the cart page to reflect the updated cart
    location.reload();
}

displayCart(); // Call this function when the cart.html page loads to display cart items.
