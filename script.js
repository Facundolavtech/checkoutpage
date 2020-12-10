const price = document.getElementById("price"),
  zapatillasRestar = document.getElementById("zapatillasRestar"),
  quantity = document.getElementById("quantity"),
  zapatillasSumar = document.getElementById("zapatillasSumar"),
  total = document.getElementById("total");

const zapatillasPrice = 74.99;
let nuevoTotal = parseInt(total.innerHTML);
total.innerHTML = nuevoTotal;

document.addEventListener("click", (e) => {
  if (e.target === zapatillasSumar) {
    quantity.innerHTML++;
    nuevoTotal = Math.round(nuevoTotal + zapatillasPrice);
    total.innerHTML = nuevoTotal;
  }
});
document.addEventListener("click", (e) => {
  if (e.target === zapatillasRestar && quantity.innerHTML >= 2) {
    quantity.innerHTML--;
    nuevoTotal = Math.round(nuevoTotal - zapatillasPrice);
    total.innerHTML = nuevoTotal;
  }
});
