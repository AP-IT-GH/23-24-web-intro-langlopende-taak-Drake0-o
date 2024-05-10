async function fetchData() {
    const apiKey = 'Y4ZGDQ-Q53W5D-STZ2TR-58VE'; 
    const apiUrl = 'https://api.n2yo.com/rest/v1/satellite';
  
    try {
      const response = await fetch(`${apiUrl}?apiKey=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Function to display API data on the dashboard
  async function displayData() {
    const apiDataContainer = document.getElementById('api-data-container');
  
    // Fetch data from the API
    const data = await fetchData();
  
    if (data) {
      // Update the HTML to display the fetched data
      apiDataContainer.innerHTML = `<p>API Data: ${data.someProperty}</p>`;
    } else {
      // Display an error message if fetching data failed
      apiDataContainer.innerHTML = `<p>Error fetching API data</p>`;
    }
  }
  
  // Call the displayData function when the page loads
  window.onload = displayData;
  