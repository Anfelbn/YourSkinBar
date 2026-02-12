let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: parseFloat(price) });
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  showNotification(productName + " ajouté au panier !");
  updateCartPage();
}

function showNotification(message) {
  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

function updateCartPage() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (cartItems && cartTotal) {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.innerText = "$" + total.toFixed(2);
  }
}

// Attacher les événements aux boutons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const price = button.getAttribute('data-price');
    addToCart(productName, price);
  });
});
