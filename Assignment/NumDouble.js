async function doubleNumbersWithDelay(numbers) {
  const doubledNumbers = [];
  for (const num of numbers) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      doubledNumbers.push(num * 2);
  }
  return doubledNumbers;
}


const numbers = [1, 2, 3, 4, 5];
console.log("Processing numbers...");
doubleNumbersWithDelay(numbers)
  .then(doubledNumbers => {
      console.log("Doubled numbers:", doubledNumbers);
  })
  .catch(error => {
      console.error("An error occurred:", error);
  });