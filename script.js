
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items');

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>$${item.price}</p>
        `;
        cartItemsList.appendChild(listItem);
    });

    document.getElementById('check-out').addEventListener('click', () => {
        localStorage.removeItem('cart');
    });
});