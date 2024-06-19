function fetchDataWithTimeout(url, timeout) {
    // Create a fetch request
    const fetchPromise = fetch(url);
  
    // Create a timeout promise
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);
    });
  
    // Return a Promise that resolves with the fetch response or rejects with a timeout error
    return Promise.race([fetchPromise, timeoutPromise]);
  }
  const url = 'https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab';
  const timeout = 5000; 
  
  fetchDataWithTimeout(url, timeout)
    .then(response => response.json())
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });