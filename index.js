function appendTimeline(cars) {
  const timeLine = document.querySelector("#car-timeline")
  const carDetails = document.querySelector("#car-details")
  timeLine.innerHTML = ''
  carDetails.innerHTML = ''
  cars.forEach(cars => {
    const addCar = document.createElement("img")
    addCar.src = cars.image
    const addNote = document.createElement("p")
    addNote.textContent = cars.Note
    timeLine.append(addCar)
    const disYear = document.createElement("h2")
    const Racer = document.createElement("p")
    const carModel = document.createElement("p")
    disYear.textContent = cars.Year
    Racer.textContent = cars.Winners
    carModel.textContent = cars["Car Company"]
    carDetails.append(disYear, carModel, Racer)
  })
}
const nav100 = document.querySelector("#all")
const nav1920 = document.querySelector("#the1920")
const nav30 = document.querySelector("#the30")
const nav40 = document.querySelector("#the40")
const nav50 = document.querySelector("#the50")
const nav60 = document.querySelector("#the60")
const nav70 = document.querySelector("#the70")
const nav80 = document.querySelector("#the80")
const nav90 = document.querySelector("#the90")
const nav00 = document.querySelector("#the00")
const nav10 = document.querySelector("#the10")
const nav2020 = document.querySelector("#the2020")
nav1920.addEventListener('click', grab1920s)
nav30.addEventListener('click', grab1930s)
nav40.addEventListener('click', grab1940s)
nav50.addEventListener('click', grab1950s)
nav60.addEventListener('click', grab1960s)
nav70.addEventListener('click', grab1970s)
nav80.addEventListener('click', grab1980s)
nav90.addEventListener('click', grab1990s)
nav00.addEventListener('click', grab2000s)
nav10.addEventListener('click', grab2010s)
nav2020.addEventListener('click', grab2020s)
nav100.addEventListener('click', grab100)

function grab1920s() {
  fetch("http://localhost:3000/1920s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1930s() {
  fetch("http://localhost:3000/1930s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1940s() {
  fetch("http://localhost:3000/1940s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1950s() {
  fetch("http://localhost:3000/1950s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1960s() {
  fetch("http://localhost:3000/1960s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1970s() {
  fetch("http://localhost:3000/1970s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1980s() {
  fetch("http://localhost:3000/1980s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab1990s() {
  fetch("http://localhost:3000/1990s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab2000s() {
  fetch("http://localhost:3000/2000s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab2010s() {
  fetch("http://localhost:3000/2010s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab2020s() {
  fetch("http://localhost:3000/2020s")
    .then(r => r.json())
    .then(cars => { appendTimeline(cars) })
}

function grab100() {
  grab1920s()
  grab1930s()
  grab1940s()
  grab1950s()
  grab1960s()
  grab1970s()
  grab1980s()
  grab1990s()
  grab2000s()
  grab2010s()
  grab2020s()
}

// const decades = ['1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];

// decades.forEach(decade => {
//  document.querySelector(`#the${decade}`).addEventListener('click', () => grabDecade(decade));
// });

// function grabDecade(decade) {
//   fetch(`http://localhost:3000/${decade}s`)
//      .then(r => r.json())
//      .then(cars => { appendTimeline(cars) })
//      .catch(error => console.error('Error:', error));
//  }

// nav1920.addEventListener('click', () => grabDecade('1920'));
// nav30.addEventListener('click', () => grabDecade('1930'));
// nav40.addEventListener('click', () => grabDecade('1940'));
// nav50.addEventListener('click', () => grabDecade('1950'));
// nav60.addEventListener('click', () => grabDecade('1960'));
// nav70.addEventListener('click', () => grabDecade('1970'));
// nav80.addEventListener('click', () => grabDecade('1980'));
// nav90.addEventListener('click', () => grabDecade('1990'));
// nav00.addEventListener('click', () => grabDecade('2000'));
// nav10.addEventListener('click', () => grabDecade('2010'));
// nav2020.addEventListener('click', () => grabDecade('2020'));