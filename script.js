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

// Add event listener to remove-from-cart buttons
document.querySelector('.cart-grid').addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
        // Remove the cart item
        event.target.parentNode.remove();

        // Update the cart count
        const cartCount = document.querySelectorAll('.cart-item').length;
        document.querySelector('.cart-btn').textContent = `Cart (${cartCount})`;
    }
});

// Add event listener to the checkout button
document.querySelector('.checkout-btn').addEventListener('click', () => {
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
});

// Função para atualizar o botão de checkout
function updateCheckoutButton() {
    const cartCount = document.querySelectorAll('.cart-item').length;
    const checkoutButton = document.querySelector('.checkout-btn');

    // Se não houver itens no carrinho, desabilita o botão de checkout
    if (cartCount === 0) {
        checkoutButton.disabled = true;
        checkoutButton.style.backgroundColor = '#ccc'; // Cor do botão desabilitado
        checkoutButton.style.cursor = 'not-allowed'; // Muda o cursor para indicar que está desabilitado
    } else {
        checkoutButton.disabled = false;
        checkoutButton.style.backgroundColor = '#333'; // Cor do botão habilitado
        checkoutButton.style.cursor = 'pointer'; // Cursor normal
    }
}

// Chame a função após adicionar ou remover itens do carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Código existente para adicionar ao carrinho

        // Atualiza o botão de checkout após adicionar
        updateCheckoutButton();
    });
});

// Adiciona o evento para remover itens do carrinho
document.querySelector('.cart-grid').addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
        // Código existente para remover do carrinho

        // Atualiza o botão de checkout após remover
        updateCheckoutButton();
    }
});

// Chame a função uma vez ao carregar a página
updateCheckoutButton();
