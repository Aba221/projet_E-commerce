function updateCartItemCount() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartItemCount = cartItems.length;
    document.getElementById('cart-item-count').innerText = cartItemCount.toString();
  }
  
  // Appelez la fonction updateCartItemCount lors du chargement de la page
  document.addEventListener('DOMContentLoaded', updateCartItemCount);