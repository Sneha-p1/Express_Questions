// Asynchronous function to fetch data from each URL and log response times
async function fetchDataFromUrls(urls) {
    for (let url of urls) {
      const startTime = Date.now();
      try {
        const response = await fetch(url);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`URL: ${url} - Response Time: ${elapsedTime}ms`);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
      }
    }
  }
  
  const urls = [
    'https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab',
    'https://api.covid19india.org/v4/min/data.min.json'
  ];
  
  console.log("Fetching data from URLs started...");
  fetchDataFromUrls(urls)
    .then(() => {
      console.log("Fetching data from URLs completed.");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  