// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function toggleNav() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("nav-collapsed");
  nav.classList.toggle("nav-expanded");
}

const services = [
  { name: "Landscape Maintenance (pruning / weed removal)", price: 10 },
  { name: "Treatment & fertilization", price: 0.003 },
  { name: "Lawn Thatching / clean up", price: 0.004 },
  { name: "Grass cutting", price: 0.004 },
  { name: "Mulching", price: 0.001 },
  { name: "Seeding", price: 0.007 },
  { name: "Aeration", price: 0.003 },
  { name: "Tree-health inspections", price: 5 },
  { name: "Tree trimming", price: 40 },
  { name: "Shrub pruning", price: 10 },
  { name: "Weed management", price: 10 },
  { name: "Tree removal", price: 80 },
];

const inputs = document.querySelectorAll("input[data-price]");

function updateNetPrice(event) {
  const input = event.target;
  const price = parseFloat(input.dataset.price);
  const quantity = parseFloat(input.value);
  const netPrice = price * quantity;
  const netPriceTd = input.parentNode.nextElementSibling;
  netPriceTd.textContent = netPrice.toFixed(2);
  updateTotal();
}

function updateTotal() {
  const netPrices = [...document.querySelectorAll(".netprice")].map((td) =>
    parseFloat(td.textContent)
  );
  const total = netPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalTd = document.getElementById("Total");
  totalTd.textContent = total.toFixed(2);
}

inputs.forEach((input) => input.addEventListener("input", updateNetPrice));

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
  form.reset();
});
