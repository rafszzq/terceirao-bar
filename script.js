// Add event listeners to the add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Get the product details
        const productImg = button.parentNode.querySelector('img').src;
        const productName = button.parentNode.querySelector('h3').textContent;
        const productPrice = button.parentNode.querySelector('p').textContent;

        // Create a new cart item
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${productImg}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productPrice}</p>
            <button class="remove-from-cart">Remove</button>
        `;

        // Add the cart item to the cart grid
        document.querySelector('.cart-grid').appendChild(cartItem);

        // Update the cart count
        const cartCount = document.querySelectorAll('.cart-item').length;
        document.querySelector('.cart-btn').textContent = `Cart (${cartCount})`;
    });
});

// Add event listeners to the remove-from-cart buttons
document.querySelectorAll('.cart-grid').forEach(cartGrid => {
    cartGrid.addEventListener('click', event => {
        if (event.target.classList.contains('remove-from-cart')) {
            // Remove the cart item
            event.target.parentNode.remove();

            // Update the cart count
            const cartCount = document.querySelectorAll('.cart-item').length;
            document.querySelector('.cart-btn').textContent = `Cart (${cartCount})`;
        }
    });
});

// Add event listener to each add-to-cart button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      // Get the product details
      const productImg = button.parentNode.querySelector('img').src;
      const productName = button.parentNode.querySelector('h3').textContent;
      const productPrice = button.parentNode.querySelector('p').textContent;
  
      // Create a new cart item
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <img src="${productImg}" alt="${productName}">
        <h3>${productName}</h3>
        <p>${productPrice}</p>
        <button class="remove-from-cart">Remove</button>
      `;
  
      // Add the cart item to the cart grid
      document.querySelector('.cart-grid').appendChild(cartItem);
  
      // Update the cart count
      const cartCount = document.querySelectorAll('.cart-item').length;
      document.querySelector('.cart-btn').textContent = `Cart (${cartCount})`;
    });
  });