
let cart = []; 
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const placeOrderBtn = document.getElementById("place-order");


const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const dish = button.parentElement;
    const name = dish.dataset.name;
    const price = parseInt(dish.dataset.price);

    // Check if already in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCart();
  });
});


function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<span>${item.name} x ${item.qty}</span><span>₹${item.price * item.qty}</span>`;
    cartItems.appendChild(div);

    total += item.price * item.qty;
  });

  totalPriceEl.textContent = `Total: ₹${total}`;
}


placeOrderBtn.addEventListener("click", () => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (total < 300) {
    alert("Minimum order is ₹300");
  } else {
    let summary = "Your order:\n";
    cart.forEach(item => {
      summary += `${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
    });
    summary += `Total: ₹${total}\nThank you for ordering!`;

    alert(summary);

    
    cart = [];
    updateCart();
  }
});
