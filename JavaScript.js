function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Shift elements to the right if necessary
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the key at the correct position
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [64, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64, 90]