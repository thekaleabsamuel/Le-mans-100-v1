function appendTimeline(car){
  const timeLine = document.querySelector("#car-timeline")

}

function grab1920s() {
  const nav = document.querySelector("the1920")
  fetch("http://localhost:3000/1920s")
    .then(r => r.json())
    .then(cars => {
      appendTimeline(cars)
    })
}
grab1920s()