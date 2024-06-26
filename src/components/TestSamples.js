function sum(a, b) {
  return a + b;
}

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid input");
  }
}

function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

export { sum, mergeArrays, myFunction, fetchData, fetchPromise };
