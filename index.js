function appendTimeline(cars) {
  const timeLine = document.querySelector("#car-timeline")
  timeLine.innerHTML= ''
  console.log(cars)
  cars.map(cars => {
    const addCar = document.createElement("img")
    addCar.src = cars.image
    timeLine.append(addCar)
  })
}

function grab1920s() {
  const nav = document.querySelector("#the1920")
  nav.addEventListener('click', () => {
    fetch("http://localhost:3000/1920s")
      .then(r => r.json())
      .then(cars => { appendTimeline(cars) })
  })
}
grab1920s()