function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
    // compare first val from the two arrays, push the lesser to results and increment the counter for that array
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
//   either this or the following while loop will run, without that the main while loop would stop running after one array is empty and the remaining values in the other array wouldn't be added to results. this adds those remaining values. either i or j will be equal to arr.length, the other will have its remaining values run through here.

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort() {}

module.exports = { merge, mergeSort};