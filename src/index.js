//fetch all the cars
const apiUrl = "https://garage.api.lewagon.com/1606/cars";
const carsList = document.querySelector(".cars-list");
const btn = document.querySelector(".btn-cta");

const fetchAllCars = () => {
  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    carsList.innerHTML = "";
    data.forEach((car) => insertCarCard(car));
  })
}

const insertCarCard = (car) => {
  const carCard = `<div class="car">
    <div class="car-image">
      <img src="https://images.unsplash.com/photo-1730298877121-b9838907ac2e?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
    <div class="car-info">
      <h4>${car.brand} - ${car.model}</h4>
      <p>
        <strong>Owner:</strong> ${car.owner}
      </p>
      <p>
        <strong>Plate:</strong> ${car.plate}
      </p>
    </div>
  </div>`;

  carsList.insertAdjacentHTML("beforeend", carCard);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const brandVal = document.querySelector("#brand").value;
  const modelVal = document.querySelector("#model").value;
  const plateVal = document.querySelector("#plate").value;
  const ownerVal = document.querySelector("#owner").value;

  let car = {
    brand: brandVal,
    model: modelVal,
    plate: plateVal,
    owner: ownerVal
  }

  insertCarCard(car)
})

fetchAllCars()
