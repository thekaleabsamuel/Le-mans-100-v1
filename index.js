function appendTimeline(cars) {
  timeLine.innerHTML = '';
  cars.forEach(car => {
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "car-details";
    detailsDiv.style.display = 'none';

    const addCar = document.createElement("img");
    addCar.src = car.image;

    const carAudio = new Audio(car.MP3);

    addCar.addEventListener('mouseenter', function () {
      detailsDiv.style.display = 'block';
      carDetails.style.display = 'block';
    });
    addCar.addEventListener('mouseleave', function () {
      detailsDiv.style.display = 'none';
      carDetails.style.display = 'none';
    });

    addCar.addEventListener('click', function () {
      carAudio.play().catch(function (error) {
        console.log('Audio playback failed:', error);
      });
    });

    const carNotes = document.createElement("p");
    const disYear = document.createElement("h2");
    const Racer = document.createElement("p");
    const carModel = document.createElement("p");
    carNotes.textContent = car.Note;
    disYear.textContent = car.Year;
    Racer.textContent = car.Winners;

    const country = car["Country of Car"];
    const emoji = countryEmoji[country] || '❓';
    carModel.textContent = car["Car Model"] + ' ' + emoji;

    detailsDiv.append(carModel, Racer, carNotes);

    timeLine.append(disYear, addCar);
    carDetails.append(detailsDiv);
  });
}

const carDetails = document.querySelector("#car-details");
const timeLine = document.querySelector("#car-timeline");
const nav100 = document.querySelector("#all");
const nav1920 = document.querySelector("#the1920");
const nav30 = document.querySelector("#the30");
const nav40 = document.querySelector("#the40");
const nav50 = document.querySelector("#the50");
const nav60 = document.querySelector("#the60");
const nav70 = document.querySelector("#the70");
const nav80 = document.querySelector("#the80");
const nav90 = document.querySelector("#the90");
const nav00 = document.querySelector("#the00");
const nav10 = document.querySelector("#the10");
const nav2020 = document.querySelector("#the2020");
nav1920.addEventListener('click', grab1920s);
nav30.addEventListener('click', grab1930s);
nav40.addEventListener('click', grab1940s);
nav50.addEventListener('click', grab1950s);
nav60.addEventListener('click', grab1960s);
nav70.addEventListener('click', grab1970s);
nav80.addEventListener('click', grab1980s);
nav90.addEventListener('click', grab1990s);
nav00.addEventListener('click', grab2000s);
nav10.addEventListener('click', grab2010s);
nav2020.addEventListener('click', grab2020s);
nav100.addEventListener('click', grab100);

function grab1920s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1920s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1920s:', error));
}
function grab1930s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1930s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1930s:', error));
}
function grab1940s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1940s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1940s:', error));
}
function grab1950s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1950s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1950s:', error));
}
function grab1960s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1960s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1960s:', error));
}
function grab1970s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1970s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1970s:', error));
}
function grab1980s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1980s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1980s:', error));
}
function grab1990s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/1990s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 1990s:', error));
}
function grab2000s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/2000s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 2000s:', error));
}
function grab2010s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/2010s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 2010s:', error));
}
function grab2020s() {
  carDetails.innerHTML = ''
  fetch("http://localhost:3000/2020s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars);
    })
    .catch(error => console.error('Error fetching 2020s:', error));
}

function grab100() {
  carDetails.innerHTML = ''
  Promise.all([
    fetch("http://localhost:3000/1920s").then(r => r.json()),
    fetch("http://localhost:3000/1930s").then(r => r.json()),
    fetch("http://localhost:3000/1940s").then(r => r.json()),
    fetch("http://localhost:3000/1950s").then(r => r.json()),
    fetch("http://localhost:3000/1960s").then(r => r.json()),
    fetch("http://localhost:3000/1970s").then(r => r.json()),
    fetch("http://localhost:3000/1980s").then(r => r.json()),
    fetch("http://localhost:3000/1990s").then(r => r.json()),
    fetch("http://localhost:3000/2000s").then(r => r.json()),
    fetch("http://localhost:3000/2010s").then(r => r.json()),
    fetch("http://localhost:3000/2020s").then(r => r.json())
  ])
    .then(results => {
      const flattenedResults = [].concat(...results);
      appendTimeline(flattenedResults);
    })
}
grab100()

timeLine.addEventListener('wheel', (event) => {
  event.preventDefault();
  timeLine.scrollBy({
    left: event.deltaY < 0 ? -200 : 200,
  });
});

const countryEmoji = {
  "British": "🇬🇧",
  "United Kingdom": "🇬🇧",
  "France": "🇫🇷",
  "French": "🇫🇷",
  "Italy": "🇮🇹",
  "Italian": "🇮🇹",
  "Italian-American": "🇮🇹🇺🇸",
  "American": "🇺🇸",
  "United States": "🇺🇸",
  "Germany": "🇩🇪",
  "German": "🇩🇪",
  "Japanese": "🇯🇵",
  "Japan": "🇯🇵",
  "Canadian": "🇨🇦",
  "Australian": "🇦🇺",
  "Argentinian": "🇦🇷",
  "Belgian": "🇧🇪",
  "Austrian": "🇦🇹",
  "New Zealander": "🇳🇿",
  "Mexican": "🇲🇽",
  "Dutch": "🇳🇱",
  "Swedish": "🇸🇪",
  "Danish": "🇩🇰",
  "Finnish": "🇫🇮",
  "Mongasque": "🇲🇨",
  "Spanish": "🇪🇸",
  "Swiss": "🇨🇭",
}
