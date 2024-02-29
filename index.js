// grabs the data function
async function fetchLeMansWinners() {
    try {
      const response = await fetch('http://localhost:3000/'); // Assuming db.json is in the same directory
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Example usage:
  fetchLeMansWinners().then(data => {
    if (data) {
      console.log(data); // This will log the fetched data to the console
      // You can process the data further here
    } else {
      console.log('Failed to fetch data.');
    }
  });