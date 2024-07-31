// Create and export an instance of WeakMap
export const weakMap = new WeakMap();

// Define and export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count of queries for the endpoint from the WeakMap
  const count = weakMap.get(endpoint) || 0;

  // Increment the count by 1
  const newCount = count + 1;

  // Update the WeakMap with the new count
  weakMap.set(endpoint, newCount);

  // If the number of queries is >= 5, throw an error
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
