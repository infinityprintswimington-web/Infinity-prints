// Sample products (you’ll replace with real items later)
const products = [
  { id: 1, name: "3D Vase", category: "household", price: 12.99, img: "images/vase.jpg" },
  { id: 2, name: "Toy Robot", category: "toys", price: 8.49, img: "images/robot.jpg" },
  { id: 3, name: "Screwdriver Handle", category: "tools", price: 6.29, img: "images/handle.jpg" },
  { id: 4, name: "Cosplay Sword", category: "cosplay", price: 25.00, img: "images/sword.jpg" },
  { id: 5, name: "Lab Gear", category: "funlab", price: 14.75, img: "images/labgear.jpg" }
];

let cart = [];

function loadCategory(cat) {
  const grid = document.querySelector(".product-grid");
  grid.innerHTML = "";
  const filtered = products.filter(p => p.category === cat);
  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>$${p.price.toFixed(2)}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  document.getElementById("cartCount").textContent = cart.length;
}

function showLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function hideLogin() {
  document.getElementById("loginModal").classList.add("hidden");
}

function login() {
  alert("Logged in (demo)!");
  hideLogin();
}

function showCart() {
  document.getElementById("cartModal").classList.remove("hidden");
  const list = document.getElementById("cartItems");
  list.innerHTML = cart.map((item, i) =>
    `<p>${item.name} — $${item.price.toFixed(2)}</p>`
  ).join("");
}

function hideCart() {
  document.getElementById("cartModal").classList.add("hidden");
}

function checkout() {
  alert("Checkout form goes here!");
  hideCart();
}
