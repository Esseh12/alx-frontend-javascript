export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = array.map((idx) => appendString + value);
  }

  return array;
}