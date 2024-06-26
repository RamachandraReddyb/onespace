import {
  sum,
  mergeArrays,
  myFunction,
  fetchData,
  fetchPromise,
} from "../components/TestSamples";

test("sum of 1 and 2 is 3", () => {
  expect(sum(1, 2)).toBe(3); // to be is for primitive values
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("merge two arrays", () => {
  expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]); // to equal is for objects and arrays
});

test("Object Assigment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
}); // null or 0 for tobe falsy

test("1 is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
}); // 1 or true for tobe truthy

test("throw invalid iinput", () => {
  expect(() => {
    myFunction("yes");
  }).toThrow();
});

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

test("the data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

test("the data is peanut butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});
