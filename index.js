async function populateTimeline() {
  try {
    const response = await fetch('db.json');
    const data = await response.json();
    const timeline = document.querySelector('.timeline ol');

    for (const year in data) {
      const event = data[year];
      const listItem = document.createElement('li');
      const content = `
        <div>
          <h2>${event.Year}</h2>
          <p>Winners: ${event.Winners}</p>
          <p>Racer Nationality: ${event['Racer Nationality']}</p>
          <p>Car Company: ${event['Car Company']}</p>
          <p>Country of Car: ${event['Country of Car']}</p>
          <p>Car Model: ${event['Car Model']}</p>
        </div>
      `;
      listItem.innerHTML = content;
      timeline.appendChild(listItem);
    }
  } catch (error) {
    console.error('Error fetching and populating timeline:', error);
  }
}

populateTimeline();
